+++
title = "Docker Phusion Base"
date = "2015-03-15"
tags = ["docker"]
+++

I have been using the [phusion baseimage-docker](https\://github.com/phusion/passenger-docker). While in the past i've been mostly interested in making my docker images as small as possible with images like alpine-linux(busy-box based) the Phusion base breaks from this tradition by encouraging you to run multiple processes from a single container.

While I was wary of this approach initially they make a good [argument](https\://github.com/phusion/baseimage-docker#docker_single_process) for it and in practice I have been really enjoying working in this fashion.

* The baseimage-docker uses RUnit rather then upstart and configuring services is well documented and straightforward.
* Cron works as you would expect and its usage isn't discouraged.
* The container size isn't tiny but since you have less of them its not a huge factor.

For my project snap-spot I have my app server(http-kit), nginx, new-relic monitoring and a data cleanup task in the same container. For a project of my size this is a good fit and has simplified my deployment,

The ability and convince of grouping processes  logically without the overhead of complex docker container orchestration. For small projects this is great.

Finally I don't find myself constantly `docker exec`'ing into a pile of containers because the services can be logically grouped which makes development and maintenance more convenient.

