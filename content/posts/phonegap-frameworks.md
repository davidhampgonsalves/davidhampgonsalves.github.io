+++
title = "Phonegap and a Million Frameworks"
date = "2013-01-09"
tags = ["Phonegap", "Cordova", "Sencha touch", "JQuery Mobile"]
+++

When writing a mobile app there are a ton of choices you need to make before you really get started. I'm going to discuss some of my experiences making these choices and living with them afterwards, starting with PhoneGap/Cordova itself.

## Phonegap/Cordova
*First off Cordova and Phonegap are the same thing, Phonegap is currently transitioning over to be an Apache Incubator project which is called Cordova.*

When choosing to use Cordova you are saying a few things about your app. The First is that performance isn't a huge concern for the project. Second that you will be using third party plugins or writing your own to facilitate all interactions with the device hardware that falls outside of what you could normally do in browser.

For agreeing to live(mostly) inside the devices webview you are rewarded with being cross platform(requires some extra work for each platform) and being able to reuse most of your html/javascript skills.
What to expect
When getting started I found it tough to get details on phone gap performance. I've found start up speed to be pretty quick, and only about a second slower than most native apps. For example on my phone(Android 4+) my app starts about as fast as instagram does.

In app performance is further complicated in your next decision which is your mobile framework choices.

# Choosing a Framework
This can be a very important step so choose wisely. I strongly recommend navigating to the demos for each framework in each platform you support and testing out all widgets/animations/transitions/etc that you are planning on using. This should give you a reasonable ball park for what sort of performance/lag to expect.

## JQuery Mobile
[JQuery Mobile](http\://jquerymobile.com/demos/1.2.0/) is really easy to start using. It shares many conventions with JQuery and the documentation is pretty good. It also has a active community and a good user base. That being said its pretty slow(as of version 1.2).

Don't plan on using animations on any low end devices. Even with hardware acceleration turned I found them to be jittery on my Android 4.0 phone.

After creating the first version of my app I was so dismayed with the performance of slide animations on popups and button press event lag that I decided to scrap the whole thing and move to Sencha(more in the Sencha section). I eventually came back to JQM and with some optimizations got things running pretty smoothly due to the learning curve and time constraints.

## Sencha Touch
Take a look at the [kitchen sink demo](http\://dev.sencha.com/deploy/touch/examples/production/kitchensink/index.html%E2%80%99) for Sencha Touch on your device and you'll see why the framework is so popular. The performance is amazing and the touch interaction feels fast, light and even native. I plan on using Sencha if my app ever gets a version 2. Sencha is very well designed and I couldn't see your app outgrowing it.

For this performance you need to make some big changes to your "web development" mentality. Its MVC so that will probably be familiar but other than that you'll be creating mostly the entire app in javascript in a fashion that felt to me a lot like Desktop GUI development. It was this steeper learning curve which personally led me back to JQM for the minimum viable version 1 of my app. Because of non-standard design of the framework, porting web pages over into your app is tricky and time consuming.

*if your requirements mandate largish scrollable lists, Sencha seems to have the best options/performance as well as some really nice data bindings.*

## Kendo UI Mobile
I gave [Kendo UI Mobile](http\://demos.kendoui.com/mobile/overview/index.html) a try but its licensing costs were outside of my non-profit budget.

Kendos big draw is that your app will look native(ish) on whatever device its run on. I found the performance to be pretty good and the demo feels pretty snappy as well.

## jqMobi and jqUI
Take a look at [jqMobi](http\://jqmobi.com/testdrive/) and you'll see some impressive performance scores. Unfortunately I there isn't much documentation and the little there is, is further obscured by its name being so similar to JQuery Mobile. For the most part JQMobi's API is close enough that you can reuse your JQuery knowledge but the JQMobi UI is a different story.

If you are really after performance I'd recommend going with Sencha, although I didn’t go too deep with JQMobi so it might be a diamond in the rough.

*As a side note, I did replace JQuery itself with jqMobi and the api's were close enough that I didn't need to make any code changes. This isn't hugely benificial though since its JQM widgets are the bottle neck and not JQuery itself.*

## Roll your Own
Setting out alone is a good alternative but be forewarned, it will eat a chunk of your time in the long run. Mobile browsers (web views) haven't had the time that desktop browsers have had to synchronize across platforms and iron out the kinks. This coupled with touch events, limited performance and memory can lead to all sorts of quirks that you'll have to handle.

You'll also need to choose or create your own navigation system to handle background loading of pages unless you want to see your pages rendering between navigation's as well as handle the lags and quirks relating to button presses/touch events which is a rabbit hole on its own.
