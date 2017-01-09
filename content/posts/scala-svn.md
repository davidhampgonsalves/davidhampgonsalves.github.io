+++
title = "Connecting to SVN with Scala/Java"
date = "2011-08-25"
tags = ["SVN", "Scala"]
+++
I needed to do some SVN scraping recently to automate the detection of certain areas of code and this is what I learned.

## Libraries
**SVNKit** was too low level for my(and I suggest most) needs. I found I was writing quite a bit of code for relatively simple actions.

**SvnClientAdapter** provides a simplified interface for either the cmd line client, SVNJavahl or SVNKit. Its my recommendation that for most projects this is the best way to go. In my case I used SVNJavaHL as my low level SVN library.

## Download
The SVNClientAdaptor library were hard at the time of writing but are available as dependencies in the related Apache project SVNAnt\: *subclipse.tigris.org/source/browse/subclipse/trunk/svnant/lib*.

* svnjavahl.jar
* svnClientAdapter.jar

## Usage\: Setup
I was working in Scala for my project but the conversion to Java is trivial.

```scala
	SvnKitClientAdapterFactory.setup();
	//To create the SVN client we first need to tell it what type of client to use.
	//Letting it choose whatever is availiable is usually fine unless you have both
	//and want to force it to use something specific
	val clientType\:String = SVNClientAdapterFactory.getPreferredSVNClientType();
	val svnClient\:ISVNClientAdapter = SVNClientAdapterFactory.createSVNClient(clientType);

	//add whatever authentication your repositor requires(if any)
	svnClient.setUsername("<your user name>");
	svnClient.setPassword("<your password>");
```

## Usage
Now that we have a svn client object we can do some work. If your familiar with SVN this part very straight forward. In my case I was listing directories and searching for files.

```scala
var svnDirs\: Array[ISVNDirEntry] = svnClient.getList(new SVNUrl("<SVN repository URL>"), SVNRevision.HEAD, false)
```

## Conclusion
This is a short post because its a short topic. Once you've got your libraries in the classpath and the client instantiated its smooth sailing. Automating SVN mapping, organization and monitoring can save you a lot of time in a big organization/repository.
