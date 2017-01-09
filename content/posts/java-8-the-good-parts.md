+++
title = "Java 8: The Good Parts"
date = "2015-09-06"
tags = [ "Java" ]
+++

Sometimes I feel that Java has become a second class citizen on the JVM. While it commands a huge market share and is generally blazingly fast it hasn't progressed like Clojure, Scala and even Groovy have. Java 8 delivered on some of the long planned features and this post is to talk about my favourites.

## Streams
Java's Streams are monads that let you represent computations as a chain of steps. Typically they are created from a Collection and then the typical functional `map`, `reduce`, `filter`, etc functions are applied to achieve a desired transformation.

Streams are a high level abstraction that make (in many common cases) writing parallelised computations simple and readable.

## Method References
With the addition of [Method References](https\://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html) Java can almost support [first-class functions](https\://en.wikipedia.org/wiki/First-class_function) which when coming from other languages should help Java feel less awkward.

## Default Methods
While default methods don't allow you to do anything you couldn't already do with abstract classes and proper inheritance design but I've found them to be convenient and more natural.

## Futures
[CompletableFutures](http\://download.java.net/lambda/b88/docs/api/java/util/concurrent/CompletableFuture.html) improves the flexibility of the existing Futures

## Fork/Join Thread Pool?
Introduced in Java 7, a system wide instance of the [ForkJoinPool](http\://docs.oracle.com/javase/7/docs/api/java/util/concurrent/ForkJoinPool.html) enables allows for parallel execution for both Streams and Futures,

## Monads
Along with Streams we also have the [Optional](https\://docs.oracle.com/javase/8/docs/api/java/util/Optional.html) monad. While its a great building block its not currently used often in the stdlib which means you would need to wrap functions that still use `null` to represent not found, or similar states.

## Date/Time
JodaTime has traditionally been almost a requirement for writing solid time/date code in but now we have `java.time` which was worked on by the author of JodaTime.
