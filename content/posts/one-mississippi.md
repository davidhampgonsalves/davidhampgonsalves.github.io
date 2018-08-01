+++
title = "Better Human Time Tracking"
date = "2017-11-26T10:17:20-08:00"
draft = true
+++

## Goal

## Graphs
* accuracy up to 2 minutes w/wo prefix
* numbers by duration (show change over time)
* time differences of prefix's
* time differences vs number of sylibles
* adjusted system
* human test results

## Problem
Lying in bed, at 4am, listening to my son cry. Counting one one-thousand, two one-thousand, three one-thousand... till two minutes had past and I would try once again to comfort him back to sleep. I thought about how fundimentally inaccurate this method was expecting the audiable duration of `one` to be similiar to `one hundred and thirty three`.

This method has been around since the 60's[^1], and while being the ubitiquous method globally for human time tracking is unnamed. The best we have in that regarad is the term "Counting mississippily" - Ross from Friends [http://fffriends.tumblr.com/image/314845356]

I do really like this method of time tracking, its simple, memorable and I'd say is a bit whimsical. With that said its fundimentally flawed in that it takes longer to say big numbers then it does small ones.
[Graph showing time / accuracy]

Globally used, in genrmany they say, in ....

Humans are ruefully poor at keeping time without attitional tooling or preparation but even so, lets try and improve on this method.

## Scope
Given how poor humans are at tracking time we will only be looking at tracking two minutes.
The current method's primary features are its memorability and simplicity which our method should errode as little as possiable.

Also:

* Resistant to external factors like stress.
* Can't require remembering secondary counts / indexes.
* No mental math.
* Doesn't require work ahead of time (precalculation, collecting samples).
* Does not require tools.
* Easy to learn.

## Non Human Data
To generate high quality on the fitness of the exiting method and our improvement would take large groups of humans counting and tracking their results.

We aren't going to do that. We are going to get a computer to count for use(audiably). That computers name is Watson(you may have heard of him) and because it "counts" consistantly we can focus of the pure / theorical aspects of our methods. I am assuming that because Watson sounds pretty natural (listen for youself[link]) that its pronounceation have audio ratio's similar to a humans (time it takes to say each number relative to another).

### High Level Adjustments

Watching Watson count, you can see two sources of inaccuracy. First is that generally it counts too slow.
[GRAPH showing time / accuracy]

This isn't the issue we are aiming to fix but we can make general adjustment

## Dynamic
The dynamic content of each interation(the number) varies sylabically from 1(one) - 7(one hundred and seventeen) over our two minute target.
[GRAPH 2 min wo suffix]
This translates to significant variability across our dataset.


## Static
The static portion of this method is the suffix. Historically there have been a few options graphed bellow by audiable duration.
https://en.wiktionary.org/wiki/Appendix:Words_used_as_placeholders_to_count_seconds

## Suffix Selection
[GRAPH suffixes by duration]

There are two parts of the current method, the number which tracks duration and the suffix which adds padding to each interval. [^1]

## Other Methods
### Heart Rate
### Rthyum
### Fixed audiable length numbering system
### Maintain a Secondary Count


[^1]: the footnote text.


















