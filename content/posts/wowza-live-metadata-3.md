+++
title = "Live Metadata Handling Using OSMF (3/3)"
date = "2011-08-01"
tags = ["Wowza", "OSFM", "metadata"]
+++

This is the third post in a series about injecting JSON based metadata into a live RTP streams using Wowza Media Server, Adobe Flex and OSMF.

## What We've Built
So far in the previous posts(1,2) we setup Wowza and created a module which will inject our JSON metadata into our live RTP stream. Then we created a flash object to trigger the event injection with our metadata from the browser.

## What We're Building (in this post)
In this post we'll be reacting to the metadata event to preform related actions on the streaming clients browser. We'll keep the flash to a minimum by converting the metadata action script object to JSON and passing it off to our javascript handler. In this way we can add or modify the reactions associated with the metadata without having to rebuild or modify our player.

## Working with OSMF
Since by now you should already have flash builder installed you'll now just need to get the OSMF libraries from osmf.org. At the time of writing I was using version 1.5.

Once you have the library you just need to add the OSMF.swc to your projects build path. This is done by right clicking your project and selecting "properties". Then select "build path" and add the library.

Depending if you want to convert your data to JSON and pass it off to some javascript you can also grab the as3corelib which will help with the Action Script object to JSON conversion.


## Adding Metadata Handling to OSMF's LightweightVideoElement
To handle our event we need to use OSMF NetClient. Our players NetClient wont be ready until the player is ready to play so we set up our handler by overriding the processReadyState method.

```actionscript
override protected function processReadyState()\:void {
    super.processReadyState();
    client.addHandler("question", onMetaData);
}
```

That's really the only change we need to make. Our onMetadata will be called when metadata is received and because its embedded in the media stream it will be in sync.

To actually do something with the metadata you can convert it to JSON like bellow and call an external javascript function of your choosing.

```javascript
public function onMetadata(data\:Object)\:void {
	//convert the question to json and call javascript handler
	var dataToJSON\:Object = new Object();

	dataToJSON.text = data.text;
	dataToJSON.type = data.type;
	dataToJSON.duration = data.duration;
	dataToJSON.attributes = data.attributes;

	var dataJSON\:String = JSON.encode(dataToJSON);
	ExternalInterface.call("onData", dataJSON);
}
```

## Closing
Over these last three posts we've build a system that allows us to stream a live event and in (near) real time inject data of our choosing which will then be injected into our RTP stream by Wowza and be displayed in the users browser.

This is a pretty useful technique and so far I've only see it used to trigger next slide events in presentation software. The sky is the limit with this one I think.

## Code (finally)
The code is safely tucked away in [github](https\://github.com/davidhampgonsalves/Wowza-Metadata-Injection-Demo).
