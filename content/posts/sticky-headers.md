+++
title = "HTML Sticky Headers"
date = "2012-01-22"
tags = ["HTML", "Javascript"]
+++

Sticky headers are heading elements that stick to the top of the window as the user scrolls down the page. This is useful since you can use them to retain the contextual information of the section regardless of the position.

In my case I needed to have multiple headers in the hourly forecast list for [hourweather.com](http\://www.hourweather.com/).

I found there wasn't much out there about this topic, especially when you want to have multiple sticky headers per page so I thought I'd share my implementation(which is pretty rough) for others to reference for the main ideas.

## Basic Concept
Sticky headers basically work by toggling the headers position type when it reaches the top of the window to fixed so that it sticks in place. The rest of the logic really just handles the flipping from one stuck headers to the next as the scrolling continues up or down the page.

## Demo
Check out [hourweather.com](http\://www.hourweather.com/) as its used in the hourly forecast listings.

## Code
This code uses JQuery since I was already using it on the page. You could remove the references pretty easily since I only used some selectors and CSS manipulations.
```javascript
function setupStickyHeaders() {
    //get initial offset positions of the headers
    var headers = [];
    $.each($('div.day-start'), function(i, headerDiv) {
        var header = $(headerDiv);
        headers.push({element\:header, orgOffset\: header.offset().top});
    });

    //if no headers on this page then stop
    if(headers.length == 0)
        return;

    //get the original css for the
    var orgCSS = {width\:headers[0].element.css('width'), position\:headers[0].element.css('position'), height\:headers[0].element.css('height')};

    //handle scrolling
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();


        //unstick headers
        for(i in headers) {
            var header = headers[i];
            if(!isStuck(header)) break;

            if(scrollTop < header.orgOffset) {
                header.element.css('position', orgCSS.position).css('top','').prev().remove();
                if(i > 0)
                    headers[i-1].element.css('z-index', 1);
            }
        }

        //stick headers
        for(i in headers) {
            var header = headers[i];
            //make sure any stuck headers are stuck in the right place(fast scrolling sometimes messes this up)
            if(isStuck(header))
                header.element.css('top','0')

            //skip this header if its bellow the top of the window
            if(scrollTop < header.orgOffset - parseInt(orgCSS.height))
                break;

            //if the header is already stuck then ignore it
            if(!isStuck(header)) {
                if(scrollTop > header.orgOffset) {
                    //stick the header
                    header.element.css('width', orgCSS.width).css('position', 'fixed').css('top','0').before('<div class=day-start> </div>');
                    if(i > 0)
                        headers[i-1].element.css('z-index', -1);
                }else if(i > 0)
                    //hide the element since it should be off the screen now
                    headers[i-1].element.css('top', header.orgOffset - scrollTop - parseInt(orgCSS.height));
            }
        }
    });
}

function isStuck(header) {return header.element.css('position') === 'fixed'}
```
