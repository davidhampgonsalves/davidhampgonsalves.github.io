+++
title = "Notefeeder"
date = "2010-12-01"
+++

{{< figure src="/images/projects/notefeeder.png" class="right-justify" >}}

[Note Feeder](https\://github.com/davidhampgonsalves/notefeeder) is a small web application that lets you save urls and notes from your current page.

You can access your notes from RSS feeds to find sites or thoughts later.

## Features

* Save links and notes without leaving your page using the bookmarklet.
* Various ways to create notes. For details see the input methods page.
* Access your notes from your current page using the RSS feeds. For other options see the output methods page
* Description field supports [markdown](http\://en.wikipedia.org/wiki/Markdown).

## Why I built it
I created note feeder to help me remember things I read and wanted to come back to on Hacker News and Reddit.

One of the main requirements I had for the project was that I didn't want to have to go to a site to do this.

Note Feeder does this by offering some convient input methods like a bookmarklet, get request or simple forms.

## Technical Notes
Note Feeder is a fairly simple Rails Web App. It ran on [Heroku](http\://heroku.com/) until the bamboo stack was shutdown. It needs to be upgraded to cedar to run again.

Authentication is handled using OpenId. This greatly reduces the first usage barrier.

I put a priortiy on caching which is preformed using page, action and fragment caching as well as HTTP caching using Varnish to reduce server load and thus hosting fees.

Markdown is handled using [RDiscount](https\://github.com/rtomayko/rdiscount) in the description area.

Full text search is performed using Postgres tsearch2 as its the only free(unofficial) option on Heroku.

