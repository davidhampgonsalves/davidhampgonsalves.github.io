+++
title = "UPC/EAN Product Databases/API's"
date = "2012-11-07"
tags = ["API", "UPC"]
+++

Converting a barcode into useful, descriptive information is harder then you would expect. Or rather its difficult to do with any reliability and accuracy. There are a few good API's that I've been using or looking into that I'll cover here.
The API's
Each service offers different information so you need to nail down your requirements before you read further. For my needs I really just need Barcode -> Company but I'll try to add details that fall outside of that where I can remember them.

## Google Shopping API
The [Google Shopping API](https\://developers.google.com/shopping-search/) is a good starting point since it covers a wide array of products.
### features
* Very descriptive.
* Dead easy to consume and you can customize your responses.
* Great documentation.
* Reasonable usage quotas.

## Milo
The [Milo Open API](https\://www.x.com/developers/ebay/products/milo-open-api) is an Ebay product(or at least they bought it). It also has a wide product range and is a great service.
### features
* Tons of available attributes.
* Dead easy to consume and you can customize your responses(supports JSON).
* Great documentation(once you find the site).
* Reasonable usage quotas.

## Amazon Product Advertising API
The [Amazon Product Advertising API](https\://affiliate-program.amazon.com/gp/advertising/api/detail/main.html) seems to be the defacto standard in UPC lookup game. It also has a wide product range and is a great service. You do have to navigate very detailed XML responses to find the good bits of data you actually care about but other then that its great.
### features
* Very descriptive.
* Great documentation(once you find it).
* Reasonable usage quotas.

## Factual Product API
The Factual Product API is pretty new to me but so far I like what I see. They have a ton of data and some cool attributes(ie nutrition, ingrediants). Their quota is only 500 lookups a day but thats enough to get started.
### features
* Clean, simple and straight forward(Supports JSON).
* Great documentation.
* Nutritional data.

## eanData
The [EanData API](http\://eandata.com/) is amazing. I really want to emphasize that since I almost didn't even bother with it. The site isn't pretty but the data is great and the developer that supports it seems like a good guy.
### features
* Tons of data.
* Reasonable usage quotas.

## upcDatabase.com
The [UPC Database](http\://www.upcdatabase.com/) is probably one of the biggest open sources of UPC data(even Google uses it if you search for a upc). The only problem is that it usually can only tell you the product name and nothing else. There are some old database exports floating around the internet from when they were regularly released that have more structured data so you may be able to use it that way.

### features
* Tons of UPCs.

## Good Guide
I really like the [Good Guide](http\://goodguide.com/). They offer a great product and are nice enough to share their data through a great API. Their product coverage is mostly in the areas of house hold items.
### features
* Very accurate.
* Easy to consume and you can customize your responses.
* Great documentation.
* Reasonable usage quotas.
* The developers are awesome and prompt.

## Simple UPC
This is the only Paid service I'm including here. It focuses on grocery store items but when I tried it out I couldn't find most of my sample UPCs. That being said when it does find an entry it has a lot of great information(like ingredients). I might give it another try later but they need to reduce the barriers of entry so you can do some basic testing. Also they have a really restrictive usage policy so make sure they don't conflict with your requirements.
### features
* Very accurate.
* Easy to consume.
* Great documentation.
* Support was prompt.

## Supermarket API
The [Supermarket API](http\://supermarketapi.com/) doesn't let you search by UPC but it does have some great product information and the developer behind it is a nice guy so I'm including it here anyway.
### features
* Accurate.
* Easy to consume.
* Great documentation.

## Scandit
Scandit offers a few resources for barcode scanning. First they offer their own properity scanning technology for most smart phones which is pretty great especially once you start scanning barcodes in the real world. Secondly they offer a API for looking up products. At the time of writing they didn't have manufacteur info but they said they would be releasing more data shortly.

## BestBuy
The[ ]Best Buy API](https\://bbyopen.com/) looks great but I haven't used it myself since I'm not concerned with electronics(yet) which is what it covers.

## Zappos
The [Zappos API](http\://developer.zappos.com/) is pretty new and covers clothing, shoes, etc. Its new but it looks promising.



*Alright, that's it. There are more options that I've looked into but these are the major ones that I've found that are worth mentioning.*
