+++
title = "Compressing JSON into a Brittle Lightweight String"
date = "2013-11-07"
tags = ["Javascript", "JSON"]
+++

Client side single page apps tend to throw a lot of JSON data across the internet. These are some techniques I used on [cimrheatmap.ca](http\://crimeheatmap.ca) to compress my Geo/Time data by about **90%** and avoided the overhead of gzipping the page. Be warned most of this was just for fun and is a silly idea because of the disadvantages listed bellow.
`{lat\:45.123, lng\:-63.123, type\: 'Assult', timestamp\: '1383837388112'}` vs. `'3   0  '`

## Maps vs. Arrays
Standard JSON compression usually focuses on flatening the maps that are normally used to represent objects. This removes all the duplciate keys.
* There are some nice plugins to help, like [json pack](https\://github.com/sapienlab/jsonpack).
In our case we have a fixed number of items in our map so we can convert it to an array and toss our keys.

`[45.123, -63.123, 'Assult', '1383837388112']`
This resulted in a savings of **%36**.

## Type Identifiers to Digits
Type identifiers can also result in some easy savings if you have a higher item count than types.

`[45.123, -63.123, 0, '1383837388112']`
Replacing 'Assult' with 0 results in a savings of **%16**.

## Rounded Timestamps to Date Parts
In many cases we don't require timestamps to be accurate to the millisecond. In my case to the day was acceptable and also all my data fell within the same year. This allowed to be store the year seperately and only assoicate the month and day with the Geo/Time item.

`[45.123, -63.123, 0, 8, 7]`
This resulted in a savings of **%18**.

## Repeating Digits
Sometimes data allows us to filter out fixed digits. In my case my Latitude is always between 40-50 and my longitude is between -60-(-60). This means I can extracting these digits out(and the decimal) and replace them on the client side.

`[5123, 3123, 0, 8, 7]`
This resulted in a savings of **%8**.

## Arrays to Fixed Length Strings
Arrays are lighter then Maps but they still have the overhead of 3 characters plus one additional character for each element they contain. By converting my data to a fixed length string I can avoid all that.

`'5123312300807'`
This resulted in a savings of **%35**.

## Alternate Encodings
So we are getting pretty small here but we can now take advantage of only having digits by playing with our encoding.

Wasting space representing each character in UTF-8(8 bits per character). Since those 8-buts can represent 255 possibilities we can represent 2 digits for each character without getting fancy by using a base 100 encoding.

So current our digits are being represented using UFT-9 encoding. if we only use the first 255 characters of UTF-8 only a single byte will be sent per character. We can use  100 of those 255 options to represent 2 digits with a single character by converting our numbers to their UTF-8 charater counterparts.
```javascript
String.fromCharCode(65) === 'A';
'A'.getCharCodeAt(0) === '65';
```

`'3   0  '`
This resulted in a savings of **%40**.


## Disadvantages of Compression
So for the advantage of reducing our data payload by 90% we suffered in three ways.

The first is the you have to write some code to transform your data into a usable format on the client. *In my case the code was 346 characters long after minification and executing it for 1500 records on chrome takes under 10 milliseconds.*

The second is that we have thrown away all the safety that comes from structured data. If we have a bug that throws anything off(even by a single character) we will be left with scrambled, unusable data from that error onwards.

The third is that our data is now quite unreadable which could make debugging harder, that being said by adding 65 to each character code you can at least get into the range of displayable characters.
