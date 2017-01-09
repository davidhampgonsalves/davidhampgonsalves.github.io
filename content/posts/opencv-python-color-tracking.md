+++
title = "OpenCV/Python Color Tracking"
date = "2011-05-30"
tags = ["Python", "OpenCV"]
+++

![](/images/color_tracking.png)

## Preamble
I needed some color based object tracking for a project I was hacking together last weekend. I choose to use the OpenCV Python bindings since I knew that I wouldn't be doing anything fancy and I thought it would simplify the learning process. While the Python bindings are great I wasn't able to find much documentation and what I thought would be an easy 10 minutes turned into a bit of an afternoon project. Admittedly I got side tracked with CamShifts, Histograms, Moments and the example code.

I also found that most of the tutorials and documentation makes even simple concepts like color tracking seem more complex then it really are. This post is intended to help you bypass all that and help you get your feet wet teaching your computer to see.

## Overview of the Process
The first thing we need to do is to get a single frame of the video feed and convert its color model from RGB which OpenCV uses to represent images by default to HSV since we can then look at just a single value to determine the Hue.

Now that we have our image in the correct format we can apply a threshold to eliminate(set their value to 0) all pixels that don't meet our criteria. This will leave only the object we aim to track so then to determine its location we can get OpenCV to calculate its moments and compute its co-ordinal position.

## The Code
And finally without further adieu, the commented code which will get you on your way. This code will open a window which will display the web cams video feed. It will then try to track a purple object but you can change the hue value to make it work with any color you want. Just make sure that color is fairly unique in the video feed.

```python
#! /usr/bin/env python

import cv

color_tracker_window = "Color Tracker"

class ColorTracker\:

    def __init__(self)\:
        cv.NamedWindow( color_tracker_window, 1 )
        self.capture = cv.CaptureFromCAM(0)

    def run(self)\:
        while True\:
            img = cv.QueryFrame( self.capture )

            #blur the source image to reduce color noise
            cv.Smooth(img, img, cv.CV_BLUR, 3);

            #convert the image to hsv(Hue, Saturation, Value) so its
            #easier to determine the color to track(hue)
            hsv_img = cv.CreateImage(cv.GetSize(img), 8, 3)
            cv.CvtColor(img, hsv_img, cv.CV_BGR2HSV)

            #limit all pixels that don't match our criteria, in this case we are
            #looking for purple but if you want you can adjust the first value in
            #both turples which is the hue range(120,140).  OpenCV uses 0-180 as
            #a hue range for the HSV color model
            thresholded_img =  cv.CreateImage(cv.GetSize(hsv_img), 8, 1)
            cv.InRangeS(hsv_img, (120, 80, 80), (140, 255, 255), thresholded_img)

            #determine the objects moments and check that the area is large
            #enough to be our object
            moments = cv.Moments(thresholded_img, 0)
            area = cv.GetCentralMoment(moments, 0, 0)

            #there can be noise in the video so ignore objects with small areas
            if(area > 100000)\:
                #determine the x and y coordinates of the center of the object
                #we are tracking by dividing the 1, 0 and 0, 1 moments by the area
                x = cv.GetSpatialMoment(moments, 1, 0)/area
                y = cv.GetSpatialMoment(moments, 0, 1)/area

                #print 'x\: ' + str(x) + ' y\: ' + str(y) + ' area\: ' + str(area)

                #create an overlay to mark the center of the tracked object
                overlay = cv.CreateImage(cv.GetSize(img), 8, 3)

                cv.Circle(overlay, (x, y), 2, (255, 255, 255), 20)
                cv.Add(img, overlay, img)
                #add the thresholded image back to the img so we can see what was
                #left after it was applied
                cv.Merge(thresholded_img, None, None, None, img)

            #display the image
            cv.ShowImage(color_tracker_window, img)

            if cv.WaitKey(10) == 27\:
                break

if __name__=="__main__"\:
    color_tracker = ColorTracker()
    color_tracker.run()
```
