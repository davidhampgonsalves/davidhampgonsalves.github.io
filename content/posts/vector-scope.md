+++
title = "SVG based Vector Scope"
date = "2026-04-11"
+++

<style>
  h2 { clear: both }

  video {
    margin: 0 0 1em 1em;
    width: 200px;
    float: right;
  }

  .giphy img {
    width: 90px;
    display: inline-block;
  }
</style>

<video autoplay loop muted style="margin: 0em 0 1em 2em; width: 225px;">
  <source src="/media/vector-scope/vs-01.mp4" type="video/webm" />
</video>
I was gifted a Sencore SC62 oscilloscope from the mid-80s. It had spent a good chunk of its 40+ year life
in a barn. This beautiful device along with many similar models are being discarded since modern scopes
have become so cheap and capable. To avoid that fate I wanted to repurpose it into something that would
allow it to live indoors once again.

Most oscilloscopes have an XY mode which lets you drive the beam position directly with two voltage inputs
  — one for horizontal, one for vertical. This makes them natural vector displays, capable of drawing
anything you can express as a series of coordinates.

As part of my [plotter](/midtbot-pen-plotter)
[work](https://github.com/davidhampgonsalves/Generative-Tree-Rings) I have been playing around with
vectorizing all sorts of things and decided to build a vector based pipeline so that I could convert SVG
files (one layer per frame) into animations, which could then be shown on the Sencore's CRT.

In all I created 16 animations which fit into the available flash memory of the ESP32 with room to spare.

Full videos are available - [here](https://www.instagram.com/p/DGJaE9qJIL9/),
[and here](https://www.instagram.com/p/DGS99hCpUQm/), [and also here](https://www.instagram.com/p/DGgIWLIpQXK/).

## Rotoscoping
<video autoplay loop muted>
  <source src="/media/vector-scope/owl.webm" type="video/webm" />
</video>

The simplest and most pure animations for this project were created in Inkscape. I converted video to a
series of frames, stacked them each on their own layer and then started tracing. It was time consuming but
  enjoyable and I really like the results.

## 3D Blender + Freestyle
<video autoplay loop muted>
  <source src="/media/vector-scope/mario.webm" type="video/webm" />
</video>

[Freestyle](https://docs.blender.org/manual/en/latest/render/freestyle/index.html) is an amazing Blender
built-in add-on which can generate line art from a 3D scene. Tuning the parameters to achieve the desired
look is an art but the results are impressive.

## Freehand
<video autoplay loop muted>
  <source src="/media/vector-scope/sheep.webm" type="video/webm" />
</video>

I drew some of these animations by hand as well. I tried a few tools for this without finding anything I
liked so I ended up doing this in Inkscape as well. My partner contributed this wolf to sheep morph which
was done in Procreate and then I auto traced it in Inkscape.

## Processing
<video autoplay loop muted>
  <source src="/media/vector-scope/vector-scope.webm" type="video/webm" />
</video>

I had wanted to play with [Processing](https://processing.org) for awhile and this was a good excuse. I
modified some of their examples to generate the text. The text is busy enough that it flickers on film
because the CRT electron gun can't keep up but in person it's nice and smooth.

## Turtles
<video autoplay loop muted>
  <source src="/media/vector-scope/diff.webm" type="video/webm" />
</video>

I've made some [turtle toys](https://turtletoy.net/user/davidhg) in the past and decided to port the
[differential growth](https://turtletoy.net/turtle/8a68f77d34) generator into an animation.

# Animation Conversion
The animation frames in SVG format were then traced using [some
scripts](https://github.com/davidhampgonsalves/vector-scope/tree/main/convert) I wrote to convert them to
x/y coord pairs in C++ format so they can be imported into the Arduino code that runs on the ESP32. This
isn't the most compact format but luckily I ran out of free time to create the animations before I ran out
  of storage space.

<video autoplay loop muted style="margin: 0em 0 1em 2em; width: 225px;">
  <source src="/media/vector-scope/vs-02.mp4" type="video/webm" />
</video>

# Hardware
Getting the ESP32 talking to the Sencore was simpler than I expected. The scope's two probe inputs map
directly to the ESP's DAC outputs — one for X, one for Y — and together they steer the CRT beam to draw
each frame. Complex frames can push the electron gun faster than it can keep up, which causes the
flickering you might notice in the videos. In person it's completely smooth, which made the first
successful test genuinely exciting to see.

To keep everything self-contained I spliced into the Sencore's internal 9 volt rail and regulated it down
to 3.3V for the ESP. The DAC outputs tap onto the probe lines, so if I ever wanted to hand the scope back
to someone for actual electronics work, it'd take about five minutes to revert.

# Giphy
I also converted all the animations to GIF so I could uploade them to [giphy](https://giphy.com/) and use them in FB messenger.

<div class=giphy>
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/owl.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/pingu.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/bluey.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/penguin.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/sheep.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/mario.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/kirby.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/frog.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/cube.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/mushroom-pat.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/scisors.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/space-path.gif">
    <img  src="https://raw.githubusercontent.com/davidhampgonsalves/vector-scope/main/gifs/water-wheel.gif">
</div>
