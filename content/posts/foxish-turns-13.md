+++
title = "13 Years of Foxish"
date = "2023-09-20"
+++

<img style="float:right" width="150" src="/images/projects/foxish.png">

13 years ago I owned a hand me down Sony Vaio laptop. It was hot and slow with a worn out battery and browsing the net was the bane of its existence. Around this time chrome was launched for Linux and it was so fast and light that it made this laptop usable again. The only issue was that it didn't have RSS support and I loved Firefox live bookmarks for keeping up with hackernews and digg.

Having written browser extensions before I thought I could solve this issue by syncing the RSS feeds with bookmark folders and started down that path. I created a POC which worked great at first. A couple hours later I noticed my feeds weren't syncing and discovered the issue that that had stopped such a extension from being written previously. Chrome was so performance minded that they had implemented a bookmark action quota of 100 actions per hour. 

This scuttled my plans since many feeds change rapidly and at the time I was wiping and re-creating the feed each time. After some napkin math I realized that implementing a diffing based update process (create/delete/move existing bookmarks to match feed) wouldn't reduce my action count enough to stay under the 100 actions per hour limit.

A couple days past and I decided to look at the Chrome source to see if I could by-pass the limit and what I found was that contrary to the documentation the 100 action limit was actually 100 actions PER action type(create, move, delete). At least for my usage this was probably enough so I wrote the diffing algorithim and started using my extension. That night I packaged it up and pushed it to the chrome store. 

The next morning when I got to work a friend who had helped test the extension said it was being covered on Gizmodo. I was use to strugging and failing to get any press for things I'd built but this time multiple sources had somehow found the extension and covered it. The next few days I saw usage grow to about 10k users and I worked on making it more user friendly and robust. 

I moved on after that but saw a few months later that others built less whimsically branded versions of the extension and that my extension now only had about 30% of the user share. This continued for many years but I still used Foxish everyday for the next few years. Eventually I moved back to Firefox but even there they eventually dropped live bookmarks RSS support. Over the following decade reports of RSS "dying" came and went and every so often I'd get emails from users asking me to do something in the Chrome store to re-add Foxish to it as terms and conditions were added or versions needed to be bumped but mostly Foxish just kept working. 

## Rewrite and Rebrand to Live RSS Bookmarks
<img style="float:right" width="150" src="/images/live-rss-bookmarks.png">
Last year due to OSX+YouTube+Firefox performance issues I switched to Brave and installed Foxish on it. I noticed that all the other similiar extensions had died but Foxish worked as expected and its wonky UI brought back fond memorys. The only issue was that I was presented with a warning about the Chrome ending support for Manifest v2 in the next few months. I knew this would be the end for the extension since updating to V3 would take more time then I wanted to spend on it.

Fast forward another year and Chrome had pushed back the EOL for Manifest v2 multiple times. In that time I'd really enjoyed live bookmarks and Brave. I checked the documentation for manifest v3 extensions and saw that the bookmark usage quotas had been removed. I convinced myself that I could simplify the code and move it to manifest v3 in an afternoon and decided that was worth the effort. 

3 days later I had re-written, re-branded and re-thought everything about the extension. I don't think there are many people who still consume RSS feeds as live bookmarks but for this niche group, I am happy to push the tooling along a little while longer.

To aid in discoverability I renamed the extension to [Live RSS Bookmarks](https://chrome.google.com/webstore/detail/live-rss-bookmarks/hdabapllcefknagcjlhcpbnlnkbofndn) and the source can be found on [github](https://github.com/davidhampgonsalves/Live-RSS-Bookmarks).