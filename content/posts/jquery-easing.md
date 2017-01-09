+++
title = "Slimming Down JQuery Easing"
date = "2012-01-06"
tags = ["JQuery"]
+++
For simple javascript animations there is always a trade off between code size and visual effects. Recently I was trying to add some visual pizzazz to [hour weather](http\://www.hourweather.com/) but didn't want to incur the overhead of JQuery UI. What I was looking for was just a simple bounce effect on some moving objects. A lighter weight alternative that I considered was [JQuery easing](http\://gsgd.co.uk/sandbox/jquery/easing/) but even that seemed like overkill. My solution was to rip out the parts I needed and I wanted to share how easy that process is.

## The Slim Down
After you grab the code for JQuery easing you'll see that the plugin is a associative array with the animation type as the key and the animation function as the value. The functions are just a wrapper around the corresponding formula which handles the motion calculation.

To slim down the library it’s just a matter of removing each keyword/function pair that you aren't planning on using.

* *you'll probably want to keep the default easing function since all your other animations will be using it.*

You can take a look at my version which adds the bounce animation bellow or you can take a look at it in action at\: [www.hourweather.com](http\://www.hourweather.com/).
```javascript
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def\: 'easeOutQuad',
    swing\: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeOutQuad\: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeOutBounce\: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    }
});
```
