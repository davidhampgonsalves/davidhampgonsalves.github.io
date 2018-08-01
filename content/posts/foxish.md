+++
title = "Foxish"
date = "2010-05-30"
tags = ["Html 5", "Canvas"]
+++

{{< figure src="/images/projects/foxish.png" class="right-justify" >}}

Foxish is a Chrome/Chromium extension that mimics the excellent native handling of RSS and Atom feed reading in Firefox using live bookmarks.

It does this by syncing RSS feeds with bookmark folders and refreshing them on a customizable interval.

## Features

* Enables live bookmark handling of RSS/Atom feeds.
* Detects feeds on the page(code based on [RSS Subscription Extension](https\://chrome.google.com/extensions/detail/nlbjncdgjeocebhnmkbbbdekmmmcbfjd) by Google).
* Customizable polling interval.
* Import function for [OPML](http\://en.wikipedia.org/wiki/OPML).

## Download
* Get Foxish from the [Google Chrome Extensions](https\://chrome.google.com/extensions/detail/jpgagcapnkccceppgljfpoadahaopjdb) site.
* Or get the source from my [github repo](https\://github.com/davidhampgonsalves/foxish).

## Chrome Limitations
- Bookmark Folders Close When a bookmark gets modified all bookmark folders will be closed, which is what foxish does during a sync. This is Chromium bug [2469](http\://code.google.com/p/chromium/issues/detail?id=2469).

- Chrome Bookmark Sync Using the bookmark sync will cause multiple items in the feeds since chrome will sync your feed folders as well. You shouldn't use this extension with the core bookmark feature. Some other bookmark sync extensions allow you to get around this by filtering out the feed folders.

- Chrome Bookmark API There are quotas based limitations on the number of bookmark actions(add, remove, move) that extensions can perform in a period of time so this extension tries to do as little as possible. Even so it is possible(I never have though) to hit these limits and the extension will have to wait for an hour before it can continue. In that case you'll be able to see the error in the error log page whcih is accessiable fromt he options page.

## Feed Back
I created Foxish to fill a need I had and decided to share. I was really happy that people seem to like it but I was blown away when it was written about on [Gizmodo](http\://gizmodo.com/5609633/10-add+ons-you-have-to-know-about-for-google-chrome) and [LifeHacker](http\://lifehacker.com/5603602/foxish-live-rss-adds-live-bookmarks-to-google-chrome).

If you have any issues checkout the [FAQ](/blog/2010/05/Foxish-faq/) and if you still have a problem send me an email.
