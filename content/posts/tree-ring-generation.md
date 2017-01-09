+++
title = "Failed Projects: Tree Ring Generation"
date = "2015-08-01"
+++

## Project Goal
I wanted to generate SVG based tree rings that would mirror peoples lives based on some basic info (name, age, times of growth).

![](/images/tree-rings/pine.png)

# Project Motivation
Tree rings are interesting because they contain a lot of information.  Over the course of the project I identified and achieved the following\:

* age (how many rings)
* species (bark characteristics, color, chance of cracking, etc)
* ring dark to light ratio and smoothness
* cracks that span multiple rings and have depth
* defects in rings (both round and angled)
* non-uniform ring width (simulate environmental factors)
* grain texture and coloration

![](/images/tree-rings/willow.png)

The code generates a scalable image using millions of points. Unfortunately the SVG files are huge and complex and most programs can't handle them. Paper.js also often fails when exporting to SVG. It draws them to an HTML canvas element easily but then its no longer scalable.

![](/images/tree-rings/willow-env.png)

## Downfall of Project
I could never get the look I wanted. Tree rings are so organic and beautiful that my representations always looked childish in comparison. The code is an abomination that arose out of a series of spikes to test out my early theories. It could be rewritten but I don't think it would result in a better final product.

The code is preserved in all its tangled-ness in [github](https\://github.com/davidhampgonsalves/tree-rings)

![](/images/tree-rings/hemlock.png)
