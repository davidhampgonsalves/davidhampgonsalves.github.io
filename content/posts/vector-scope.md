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
I was gifted a Sencore SC62 oscilloscope from that mid 80's. It had spent a good chunk of its 40+ year life in a barn. This beautiful device along with many similiar models are being discarded since modern scopes have become so cheap and capable. To avoid that fate I wanted to repurpose it into something that would allow it to live indoors once again. 

As part of my [plotter](/midtbot-pen-plotter) [work](https://github.com/davidhampgonsalves/Generative-Tree-Rings) I have been playing around with vectorizing all sort of things and decided to build a vector based pipeline so that I could convert SVG files(one layer per frame) into animations, which could then be shown on the Sencore's CRT.

In all I created 16 animations which fit into the available flash memory of the ESP32 with room to spare.

Full Videos are avalible - [one](https://www.instagram.com/p/DGJaE9qJIL9/), [two](https://www.instagram.com/p/DGS99hCpUQm/), [three](https://www.instagram.com/p/DGgIWLIpQXK/).

## Rotoscoping
<video autoplay loop muted>
  <source src="/media/vector-scope/owl.webm" type="video/webm" />
</video>

The simpliest and most pure animations for this project were created in inkscape. I converted video to a series of frame, stacked them each on their own later and then started tracing. It was time consuming but enjoyable and I really like the results.

## 3D Blender + Freestyle
<video autoplay loop muted>
  <source src="/media/vector-scope/mario.webm" type="video/webm" />
</video>

[Freestyle](https://docs.blender.org/manual/en/latest/render/freestyle/index.html) is an amazing blender built in add-on which can generate line art from a 3D scene. Tuning the paramters achieve the desired look is an art but the results are impressive.

## Freehand
<video autoplay loop muted>
  <source src="/media/vector-scope/sheep.webm" type="video/webm" />
</video>

I drew some of these animations by hand as well. I tried a few tools for this without finding anything I liked so I ended up doing this in inkscape as well. My partner contributed this wolf to sheep morph which was done in procreate and then I auto traced it in inkscape. 

## Processing
<video autoplay loop muted>
  <source src="/media/vector-scope/vector-scope.webm" type="video/webm" />
</video>

I had wanted to play with [Processing](https://processing.org) for awhile and this was a good excuse. I modified some of their examples to generate the text. The text is busy enough that it flickers on film because the CRT electron gun can't keep up but in person its nice and smooth.

## Turtles
<video autoplay loop muted>
  <source src="/media/vector-scope/diff.webm" type="video/webm" />
</video>

I've made some [turtle toys](https://turtletoy.net/user/davidhg) in the past and decided to convert the [diffrential growth](https://turtletoy.net/turtle/8a68f77d34) generator into an animation. 

# Animation Conversion
The animation frame in SVG format were then traced using [some scripts](https://github.com/davidhampgonsalves/vector-scope/tree/main/convert) I wrote to convert them to x/y coord pairs in C++ format so they can be imported into the Arduino code that runs on the ESP32. This isn't the most compact format but luckily I ran out of free time to create the animations before I ran out of storage space. 

<video autoplay loop muted style="margin: 0em 0 1em 2em; width: 225px;">
  <source src="/media/vector-scope/vs-02.mp4" type="video/webm" />
</video>

# Hardware
The ESP's two DAC’s draw out each frame at the set frame rate. Any flickering you notice (which you can’t see in person) occurs when a frame is too complex and the CRT can’t stear the beam fast enough. 

I spliced into the Sencore's internal 9 volt(from what I remember) rail and regulated that down 3.3v for the ESP. The DAC's are spliced onto the probe lines so reverting the device back to its original purpose would be a quick change.

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
