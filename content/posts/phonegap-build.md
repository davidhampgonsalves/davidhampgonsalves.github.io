+++
title = "Building Phonegap/Cordova Apps for IOS"
date = "2013-07-05"
tags = ["Phonegap", "Cordova"]
+++

If you don't own a mac it can be tricky to write/build a mobile application for IOS unless you own a Macbook. In the world of Phonegap there are a few options to get you into the marketplace.

## Phonegap Build
Phonegap build is very nice. It looks good, is easy to use, builds are fast, their debugging system is really nice and quite clever. They also offer hydration which causes your device to pull your latest build so you don't have to reinstall.

They are also working on a system to allow developers to use their own plugins(if they support plugman) which I've heard will be done this summer sometime(Looks like they are announcing it this [month](http\://phonegap.com/blog/2013/07/03/build-june-summary-post/).

I'm a big fan of Phonegap build and it is my current choice for building Ethical Barcode.


### Application Craft Build
Application Craft has a nice build service and their staff are helpful. The trial is a great insentive to get your feet wet and the system works pretty well. They also have more plugin options then Phonegap Build. Where Application Craft falls short is that they mostly created the build system to support their own App platform so it isn't overly Cordova spesific. This also means that they are slow at getting Cordova versions availiable for the build and while I was using it were consistantly a minor version or two behind current.

One big issue is debugging since you can't access the logs to deal with any Java errors you might be getting. They do offer a tool that you include on your page but it is quite limited.


### VM
Renting a IOS VM is a good option and is cost effective in the short term. Over time the overhead of having to setup the VM each time, updating code, building and then repeating that process for each artechture is a bit of a pain. Also you have to deal with the latency of your remote desktop protocol.
