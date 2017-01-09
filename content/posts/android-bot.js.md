+++
title = "Building a Basic Android Bot"
date = "2013-11-14"
tags = ["MonkeyRunner", "Android", "Python"]
+++

Last week I started playing a new game on my phone called Castle Crash. I don't play often play video games but when I do, I play them obsesively until they are defeated. In this case you can't beat the game since you are playing against the internet so I decided to tap out and let my computer take over.

## MonkeyRunner
Android has a great tool for writing simple automated tests on a device called MonkeyRunner. It uses Jython to let you write Python scripts that simulate user interactions and events on your device. [MonkeyRunner](http\://developer.android.com/tools/help/monkeyrunner_concepts.html) can be found in the tool directoy after you have installed the Android SDK.

## Determine Apps Package/Activity
To determine an apps package/activity the easiest way is to download the .apk file, decompress it and take a look at the [AndroidManifest.xml](http\://developer.android.com/guide/topics/manifest/manifest-intro.html). Alternatevly you can run the app on your device and watch the [logs](http\://developer.android.com/tools/help/logcat.html).

## Long Presses
Long pressing is a pretty standard user interaction but MonkeyRunner doesn't really support it. It does however support .drag() which can be used for the same purpose.
```python
	device.drag((x,y), (x,y), pressTime)
```

## Exiting App
Exiting the app is a good way to reset back to a known state and can be done between actions if the game structure allows.
```python
device.shell('am force-stop ' + package)
```

## Determine Interaction Coordinates
Since MonkeyRunner doesn't know anything about the app that is running it works solely with pixel coordinates. This means that you need to determine the location of all elements on the screen you want to interact with and there are a few ways of doign this. The most basic way is to determine the size in pixels of your device and then start estimating from there. This actually works quite well once you get the hang of it. A more accurate method is to enable ponter locations on your device(under developer options) and then walk through the flow keeping track of each required action.


## Some Bot Code
This code replenishes the four troop camps in Castle Crash and is a good example of simple interactions with the game.

```python
def replenishTroops(campNumber)\:
	print 'replenishing troops'
	campLocations = [(320, 400), (320, 120), (590, 80), (560, 350)][campNumber]

	touch(campLocations[0], campLocations[1]) #select camp
	touch(480, 450) #press hire button

	device.drag((300, 450), (200, 450)) #scroll to archers
	time.sleep(5) #wait for scroll to finish
	device.drag((500, 450), (501, 451), 5) #long press archers button

	touch(660, 60) #close areana window
	touch(5, 5) #deselect anything

def touch(x, y, delay=2)\:
	print('touching ' + str(x) + ', ' + str(y))
	device.touch(x, y, 'DOWN_AND_UP')
	time.sleep(delay)

```
