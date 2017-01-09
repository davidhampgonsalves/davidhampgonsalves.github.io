+++
title = "The Magic of UPC/EAN Barcodes"
date = "2012-11-12"
tags = ["UPC", "Barcode"]
+++
Lately I've been working a mobile app called Ethical Barcode that scans product barcodes and determines if the related brand is worth supporting/avoiding.

As such of this I've been getting pretty familiar with the pitfalls and issues surrounding barcodes and product identification and I thought I'd share some of details that were tricky to find/figure out.

Before we get into the hurdles though, I'll cover some barcode basics.

Barcode Types(that matter)

* UPC-A\: 12 digits, first 6-10 represent the manufacture.
* UPC-E\: 6 digits, used when package size does not permit UPC-A.
* EAN-13\: 13 digits, first 7-11 represent the manufacture(EAN is a superset of UPC-A).
* EAN-8\: 8 digits.
* EAN-5\: 5 digits, never seen one in North America so I don't support them.
* EAN-2\: 2 digits, never seen one in North America so I don't support them.
* GTIN\: There is a variant of GTIN codes for each of the above types, but I'm not going to get into that since everything usually focuses on UPC or EAN.

While there are quite a few formats of barcodes in North America we usually see UPC-A and UPC-B barcodes and sometimes EAN which is what I cover. You can simplify your storage/handling of these codes by converting each format to EAN.

## Conversion
UPC-A can be converted to EAN-13 by pre-pending a zero making the 12 digit UPC code a 13 digit EAN. UPC-B can be converted to UPC-A as described on the [wikipedia page](http\://en.wikipedia.org/wiki/List_of_GS1_country_codes) or you can take a look at my sample code. EAN-8 cannot be converted to EAN-13 so you can either throw it in short and check for that condition if its important or avoid them.

## Whats in a Barcode
Barcodes contain information that can be pretty useful.

### First 3 Digits
A code which is controlled by GS1 that determines where the code was registered or the type of product. As always, take a look at the wikipedia page. Watch out for barcodes that use the 200–299 prefix as it is meant for barcodes that are used for products that are only sold at a specific store. This means there may be duplicates if you are targeting more then one store. Also there is a code(050-059) for coupons and a code for drugs(030–039) which you may want need to handle differently.

### Digits 4-11
Represent the company number. This number has a variable length which is decided based on the number of products a company produces. A shorter company number means more digits to represent products.

### Digits 7-12
A number representing the item itself. Digit 13A checksum which can be used to detect all single digit errors.

## Pitfalls
So barcodes seem like pretty handy tools to help identify products in our world but its not quite so simple.

*First of all*, the company number isn't as cut and dry as it sounds. This is because some companies decided to sell subsets of their barcodes to other smaller companies... which sucks because now it can never really be relied upon.

*Secondly*, its really hard to find out what companies are associated with which company numbers because the GS1(in my experience) doesn't share this information(I asked). They do have a search option on their site but again in my experience it never gives any real data back.

*Thirdly*, many stores don't use real barcodes or if they do they use the 200-299 GS1 code range. This is usually in cases where the products are only sold at that store or chain.

*Lastly*, there isn't a really good product database that you can link to based on UPC/EAN. I'll cover the current options in this next post.
