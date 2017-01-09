+++
title = "Dynamic CSS Reset"
date = "2014-03-15"
tags = ["Javascript"]
+++

When ever you ever have to inject HTML into an unknown page you have to battle with all the page styles messing with your own content. This happens a lot when building bookmarklets like my recent [RSVP Reader](/spritz-like-rsvp-reader-bookmarklet/). In the past you had to manually assign values for all the CSS properties that could have been set by the page. Since then then _[initial](https\://developer.mozilla.org/en-US/docs/Web/CSS/initial)_ CSS property was added we can perform this reset automatically. The following is a function that resets all CSS properties for a given DOM node.

```javascript
function resetStyles(node) {
    if(!node)
        console.error('node was invalid\: ' + node);
    /* iterate over the DOM nodes style properties and set them to initial */
    var props = window.getComputedStyle(node, null);
    for(var i=0, len=props.length ; i < len ; i++) {
        node.style[props] = 'initial';
    }
};
```
