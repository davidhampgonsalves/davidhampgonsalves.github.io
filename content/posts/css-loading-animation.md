+++
title = "Loading Indicator & CSS Animations"
date = "2011-11-26"
tags = ["CSS"]
+++

Recently I needed a minimum viable animated web loading indicator. I didn't want to add another image to my page for load time reasons. Nor did I want to write any javascript for size/time reasons. This left me with CSS animations. CSS based animations at this point only have limited browser support but for my project which already required HTML5 Geo Location it seemed like a good fit. This post is to show how easily this animation can be added as well as show how nicely it downgrades.


## Setup
For my loading indicator I used a container div and also a div to cover half of the sun which isn't required. All you need is a DOM element that you want to spin.
The Important Bits
The spinning sun animation is achieved(using CSS) by first creating an animation that rotates the image from 0 to 360 degrees. This is shown in the code bellow for both Chrome(Webkit prefix) and Firefox(Moz prefix)\:

```css
/* the rest of the important stuff for Chrome */
@-webkit-keyframes rotate {
	from {-webkit-transform\:rotate(0deg);}
	to {-webkit-transform\:rotate(360deg);}
}
/* the rest of the important stuff for Firefox */
@-moz-keyframes rotate {
    from {-moz-transform\: rotate(0deg);}
    to {-moz-transform\: rotate(360deg);}
}
```

Next we need to start the animation. This involves setting its peroid(time per animation), iteration count and the animation name we want to start. In our case we want a continous animation so we set the iteration count to infinate andset our peroid to 5 seconds since that looks nice to me. We also define which animation-timing function to start. This is all shown bellow for both Chrome(Webkit prefix) and Firefox(Moz prefix)\:

```css
#your-dom-element {
	/* some of the important stuff for Chrome */
	-webkit-animation-name\: rotate;
	-webkit-animation-duration\: 5s;
	-webkit-animation-iteration-count\: infinite;
	-webkit-animation-timing-function\: linear;
	/* some of the important stuff for Firefox */
	-moz-animation-name\: rotate;
	-moz-animation-duration\: 5s;
	-moz-animation-iteration-count\: infinite;
	-moz-animation-timing-function\: linear;
}
```

## Wrap up
There are many cases where the lack of browser support will prevent you from using this approch but for me this is a great solution. It creates very little extra load and doesn't require new image reasources(if you can reuse an image already on the page). It also downgrades well and maintains its function. For a live example you can check out\: [hour weather](http\://www.hourweather.com).
