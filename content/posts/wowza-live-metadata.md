+++
title = "Injecting Live Metadata with Wowza (1/3)"
date = "2011-08-03"
tags = ["Wowza", "metadata"]
+++

This is the first post in a series about injecting JSON based metadata into a live RTP streams using Wowza Media Server, Adobe Flex and OSMF.

## What We're Building
Over the course of these posts I'll cover how to trigger a event with associated JSON data from a flash object via a NetConnection which then in turn cause Wowza to inject the related data into the live [RTP](http\://en.wikipedia.org/wiki/Real-time_Transport_Protocol) media stream and then finally to listen for and handle that event on the client side [OSMF](http\://www.osmf.org/) based video player.

## Developing with Wowza
Before we start you need to get set up. We'll be working on the Wowza Server injection first so you'll need to install and configure Wowza Server and the Wowza IDE which is all well documented and available on the Wowza site.

At the time of writing I was using Wowza IDE version 2.0 and Wowza Server version 2.2.4.

## Setting up Wowza
If you're new to Wowza you'll want to look at the demos provided and the great documentation they have on their site.

Otherwise you'll want to set up a *"live-rtp"* streaming application which we'll be using for this project.
Metadata Injection Module
Wowza uses modules to extends the servers functionally. In our case we'll need to create a Module which will add a method that can be called by our flash broadcaster client to inject data into our live stream.

Create a Wowza Media Server Project  First we need to create a project in the Wowza IDE. You'll need to define your package name and also which methods your module with override which in our case is none since we'll be creating our own.

Create our Remotely Callable Method  Now that we have our empty module we just need to add the code to inject the metadata event. This method will be called using a NetConnection from the flash object we'll create later.

This code gets the stream that matches the passed in parameters and injects the associated metadata into it.

```java
    public void injectEvent(IClient client, RequestFunction function,
			AMFDataList params) {

		String streamname = params.getString(PARAM1);
		AMFDataObj question = params.getObject(PARAM2);

		IMediaStream stream = client.getAppInstance().getStreams()
			.getStream(streamname);
		if(stream != null) {
			System.out.println("event injected into " + streamname);
			stream.sendDirect("question", question);
		} else
			System.out.println("stream " + streamname + " wasn't found to inject into");
	}
```

Deploying our Module Wowza modules are jar archives which live in the servers lib directory. You can either have Wowza IDE deploy your change automatically or you can build it and then move i manually depending on your situation and where your media server is. In a later post I'll cover how to deploy on EC2 as well.

Hooking Up the Module Finally we need to tell Wowza about our module. This is configured in the Application.xml file which resides in the conf directory in the Wowza server root. Add your module to the existing list of Modules by copying one of the existing entries and changing the Name, Description and Class fields to match your module.

## Closing
So by this point you should have Wowza running with a module that you can't really even use or test. Not to fear in the next post I'll cover how to call the module and have it inject JSON data into the stream.
