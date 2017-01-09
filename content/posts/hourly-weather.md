+++
title = "Hourly Weather"
date = "2011-04-01"
+++

![](/images/projects/hourlyweather.png)

Hourly Weather is two small projects that share the same major code base. The first is an [App/Appwidget](http\://market.android.com/details?id=com.hourlyweather) for the android platform and the second is a [web application](http\://www.hourweather.com/).

Both projects have a similiar goal which is to give you an hour based forecast for your current location. The Android version does this using the devices build in location based hardware and the web application does this using the new [HTML 5(kind of) geo-location api](http\://dev.w3.org/geo/api/spec-source.html).

### features

* Aims to be as accurate as possible since it's based on your current location.
* Gives you information on sun rise/set times.
* Super easy to use, no configuration required.

## why I built it
Both of these projects were started to eliminate the pain of constantly checking different forecasts for nearby cities to figure out how it would affect my days plans.

I wanted to be constantly aware of the short term weather around me so I wouldn't get caught in the rain on my motorcycle commutes and outdoor activities.

I also didn't want to have to reconfigure my weather settings when I traveled or commuted.

Hourly Weather is my attempt at eliminating these stresses as well as getting the most accurate forecast possible.

### download
[Hourly Weather](http\://market.android.com/details?id=com.hourlyweather) for your Andoid device or try the web based [Hour Weather](http\://www.hourweather.com/).

## technical notes
Hourly Weather is powered by the YR.NO weather service which is amazing. It also uses [JodaTime](http\://joda-time.sourceforge.net/) for its date related operations.
