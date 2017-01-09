+++
title = "OpenCV CompareHist Performance"
date = "2015-01-31"
tags = ["OpenCV"]
+++

I did some performance tests on the four histograms comparison methods that [compareHist](http\://docs.opencv.org/java/org/opencv/imgproc/Imgproc.html#compareHist\(org.opencv.core.Mat, org.opencv.core.Mat, int\)) provides and initially found that in basic performance tests they were all about the same speed. More recently I profiled them in a real world application and found they were significantly different.

![](/images/opencv-graph.png)

_This is all using the Java OpenCV bindings._
