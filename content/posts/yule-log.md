+++
title = "Html5 Canvas Yule Log"
date = "2010-12-25"
tags = ["Html 5", "Canvas"]
+++

The last few weeks I've seen more fake burning fires then every other holiday season I can remember so when I noticed no one had written one in canvas I figured I'll fill the gap.

## the Fire
Not being a game developer I needed to read a bit about how to create a reasonable but minimally resource intensive fire simulation. The one I chose works by randomly generating colors and then propagating them up the page while averaging out near by colors and adding a cooling effect.

## Porting
I've never had the chance to port code before so for this little project I decided to give it a try. I found a reasonable implementation in ruby(chosen because its also a dynamic language) and did a direct port over to javascript and canvas. I would include a link to the ruby src but I can't seem to find it anymore. This worked pretty well but even in chrome performance was very poor. In each area I discuss some of the performance changes I made.

## Color Palatte
The color palette takes the form of an array of colors ranging from yellow to orange to red. Canvas doesn't have a standard way of setting colors directly and relies on css based colors when specifying for fills and paths. To address this I pre-generated all of the CSS RGB color strings to avoid the string concatination in the main loop.

## Fire Map
In the Ruby implementation they used a single dimension array for tracking the current fire positions and colors. I changed this to use a 2 dimensional array because in my main animation loop I have to poll three reference points to calculate the new value for each square of the fire. Having a two dimensional array lets me store the row index and thus makes my look ups faster. Because this is getting called for every block of the fire map it made a big difference. I say square and not pixel because in this example I'm actually drawing squares so that I can change the scale of the fire if I want to. Next time I'll probably try flipping the pixels directly using the Canvas ImageData method to see how much better it performs.

## Audio
Audio is one of the more exciting parts of the HTML 5 spec but at the time of writing this isn't well supported by stable browsers although I've seen some really cool audio demos from the Firefox guys with their betas. I'm using a looped Theora ogg sound file but even so there is limited support. Because of this I had to work around the loop parameter being ignored with a standard chunk of Javascript. Even so this only works on Firefox 4(beta at the moment) and Chrome.

## Demo
You'll need to be using Chrome or a Firefox Beta for this to run correctly.

[Yule log canvas demo](/html/woodstove.html)
