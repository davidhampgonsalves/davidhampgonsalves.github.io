+++
title = "JQuery JFeed"
date = "2011-01-26"
tags = ["JQuery", "jfeed"]
+++
While working on Foxish I needed to parse some RSS/Atom feeds in javascript. Thinking there would be nice a library for this I took a look around and found a couple old libraries and determined that the best of those was [JFeed](http\://plugins.jquery.com/project/jFeed) which is a JQuery plugin.

## Issues
As I worked on the project I discovered issues with the library and since it was last updated in 2007 it didn't support JQuery 1.4.*.
In working on Foxish I ended up updating the plugin and fixing a few small bugs and today I remembered that I should share the updates.

## Updates
It now works with JQuery 1.4.2 and so far has handled every feed that 3000 Foxish users have thrown at it.

## Download
You can get my updated version from the Foxish src in my github repository [here](https\://github.com/davidhampgonsalves/foxish/blob/master/scripts/jquery.jfeed.js).
