+++
title = "Failed Projects: Open Mosaic"
date = "2015-08-02"
tags = ["OpenCV", "Java"]
+++

The goal of this project was to recreate an image as a mosaic of other images. I wanted to achieve this with a low number of tiles and not simply use images as pixels based on their colors.

<img src="/images/open-mosaic/sample.png" style="width\: 800px" class="center plain"/>

## Mistakes
The biggest mistake I made was to vastly underestimate the difficulty of the problem. I thought I could get good results by tuning my early histogram grid implementation and floundered. I have seen many other attempts at this project but yet to see any that produce good results.

## Path to Failure
* Played with Perceptual Hashes (then read about how they work and abandoned this path).
* Moved to Grid of Histograms\: _Divide source and input images into grids and generate / compare Histograms._
* Switched from HSV to LAB / LUV color spaces for a more human perception of color.
* Switched from Instagram to Flickr for source images(Insta is filled with images of text).
* Experimented with different histogram comparison methods (Chi-Square, Bhattacharyya, etc).
* Optimised algorithm for a shorter iteration loop (this was successful).
* Researched our perception of shapes, switched to basic shape (still factor in color) approach.
* Performance mandated hybrid approch\: first pass histogram grid, second pass with feature detection, finally adjust image contrast / brightness.
* Failure.


## Next Time
* Quantify success early\: _manually create mosaic based on small input set and diff with algorithms results to calculate how successful each run was_.
* Search inside each possible image for good matches / try different rotations of source images.
* More processing power (cluster).
* Focus on shapes and start in greyscale space.
* Use bag of words model.
* Use weighted multiple factors (histograms, FLANN, Feature Detection, shapes, etc).
* Write it in C++\: _Other language bindings are great but the stack traces force you into C/C++ anyway._
