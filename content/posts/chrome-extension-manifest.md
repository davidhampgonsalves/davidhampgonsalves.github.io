+++
title = "Updating Chrome Extension Manifest"
date = "2012-08-29"
tags = ["JQuery", "Chrome Extensions"]
+++
*This post should really just read\: JQuery 1.4 breaks(Refused to execute inline script) when used in Chrome Extensions using the version 2 Manifest. Update to Jquery 1.7 and you'll be happy.*

Unfortunately it doesn't, it reads more like\:

Last night I decided to cross something off my to do list and updated [Foxish](https\://chrome.google.com/webstore/detail/jpgagcapnkccceppgljfpoadahaopjdb)(a chrome extension) to use the version 2 manifest that will become manditory in a short while.

For the most part it was pretty painless. Mostly it involves moving your javascript from the headers(or footers) of your html and placing it in seperate .js files to avoid some security risks outlined on the [chrome site](http\://developer.chrome.com/extensions/manifestVersion.html).

The tricky part came after I had finished eliminating all the inline javascript and I was still seeing **Refused to execute inline script because it violates the following Content Security Policy directive\: "script-src 'self' chrome-extension-resource\:"**. on every page of my extension.

Since it was affecting everything and all the errors were reported to come from the first line of each page I knew it had to be something global or common to all pages. Turns out it was JQuery. I was still using version 1.4.2(which was the newest at the time) and for some reason(I didn't check) that causes the issue. Upgrading to 1.7 fixes this.

Looking around the internet this morning it looks like a couple other people have been affected by this but all(like me) have been to lazy to rip appart the old JQuery library to determine the cause. If you get around to it let me know and I'll buy you a coffee.
