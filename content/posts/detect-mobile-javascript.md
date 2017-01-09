+++
title = "Detecting Mobile Device from Javascript"
date = "2013-10-21"
tags = ["Javascript", "Mobile"]
+++

This is a pretty lightweight way of detecting when your javascript is living in a mobile device.
```javascript
if(typeof window.orientation != 'undefined') { /* put mobile spesific code here */ }
```

To omit spesific devices from running this code you can also add individual checks like the following.
```javascript
if(typeof window.orientation != 'undefined' && !navigator.userAgent.match(/iPad/i)) {
  /* put mobile spesific(but not ipad) code here */
}
```

This is a mix of the answers found on [stack overflow](http\://stackoverflow.com/questions/11381673/javascript-solution-to-detect-mobile-browser).
