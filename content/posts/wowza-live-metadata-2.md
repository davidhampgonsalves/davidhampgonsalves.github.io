+++
title = "Flash NetConnection for Wowza RMI (2/3)"
date = "2011-08-02"
tags = ["Adobe Flex", "NetConnect", "Wowza"]
+++

This is the second post in a series about injecting JSON based metadata into a live RTP streams using Wowza Media Server, Adobe Flex and OSMF.

## What We've Built
So far in the previous post we got Wowza setup and created a module which will inject our JSON metadata into our live RTP stream.

## What We're Building (in this post)
In this short post we'll be triggering the injection of metadata from the browser using a flash object created with Flex. Depending on your needs you may choose to call this method in some other way.

## Developing in Flash Builder
The first thing you'll need is Flash Builder, or in my case a 30 day trial of Flash Builder.

Once you have Flash Builder you'll need to create a Flex Project for the web. At the time of writing this I was using Flex 4.5.1.

## NetConection RMI
In my case I used the ExternalInterface to allow me to call one of the flash object's methods from Javascript but you can do whatever you want in your broadcaster. The important bit is creating a connection to the Wowza server via a NetConnection and using it to call our Modules(created in last post) inject metadata method. This is shown bellow\:

```actionscript
NetConnection.defaultObjectEncoding = flash.net.ObjectEncoding.AMF0;
NetConnection nc = new NetConnection();
nc.connect("your server name");

nc.call("wowza_module_method_name", null, "your movie name", JSONMetadata);
```

This code tells the net connection to use the object encoding of AS 1.0/2.0 which Wowza likes. Then it creates the connection to your server and passes the movie name as a method parameter so that Wowza knows what stream to inject the data into. The JSONMetadata parameter is an Flex Object that contains all the metadata to inject.

## Closing
This post is pretty brief but I'm hoping the important bits are all in there. I'll be posting all my code in the next(last) post. Im my code to keep the flash to a minimum I created a flash object which I called using javascript(ExternalInterface) and passed in a javascript object which gets converted to an Action Script object automatically.
