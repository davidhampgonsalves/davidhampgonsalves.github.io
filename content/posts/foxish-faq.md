+++
title = "Foxish FAQ"
date = "2010-05-29"
+++

![](/images/projects/foxish.png)

## What is Foxish RSS?
Foxish is an RSS/Atom reader in the style of Firefox's Live Bookmarks. It syncs RSS/Atom feeds with bookmark folders so that you can conveniently watch and read the content. I feel this style of RSS/Atom consumption is a perfect fit for sites like Reddit, Hacker News, etc.

## My Foxish RSS feeds arn't syncing
There can be a couple reasons for this. First the feed itself may have an issue and second you may have hit the Chrome extension bookmark API limit. This limit is imposed by the browser and restricts the number of actions Foxish can make in a given period. You can determine which issue by looking at Foxish's logs which can be accessed from the options page(Under Tools > Extensions and then click options on the next screen) in the bottom left hand of the screen.

## Can you display favicons next to the feed items?
Wish I could but right now the Chrome API doesn't allow it. If this ever changes I will add the feature.

## Can you display a different icon for the RSS feeds?
Same answer as above.

## Does it Handle Https Feeds?
Yes as of version 3.9

## Can you add right click on Folder to refresh?
Since Foxish uses bookmarks and bookmark folders to simulate Live Bookmarks there is no way currently to add this. If that changes I will add the feature since I miss it too.

## Can you display the description on mouse over?
see above.

## I deleted the folder but it keeps coming back!
Foxish, in its exuberance to sync feeds and keep you up to date will always recreate feeds if they are wiped out. To remove a feed go under the options and delete it there. The folder will automatically get removed and it will stay that way.

## I use bookmark syncing and it breaks everything!
Since Foxish is always making changes to bookmarks it will start battling the bookmark sync process which will try to mirror all those changes. Eventually Foxish will loose
when it hits the bookmark api limits. If they ever allow the omission or exclusion of certain folders then this problem will be resolved.
