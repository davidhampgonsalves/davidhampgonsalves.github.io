+++
title = "Launchd in 5 Minutes"
date = "2015-02-01"
+++
Launchd is the official way to schedule a task or run a service on OSX. The provided documentations goal is to turn you into a launchd expert at the cost of your afternoon. These are the 5 minute highlights to get a task running.

## Configure Plist
You tell launchd to run a task by putting a reverse domain named plist file(`com.example.name`) in `~/Library/LaunchAgents`, this is probably what you are looking for but if you want it to be global then put it in `/Library/LaunchAgents`.

This file needs to have 600 permissions `chmod 600 com.example.name.plist` and be owned by `root`, `chown root com.example.name.plist`.

Launchd tasks are run from `/` so all paths should be relative from that point.

Take a look at my [plist](https\://github.com/davidhampgonsalves/markov-cloj/blob/master/markov-tumblr.plist) as an example. Everything in there is pretty self explanatory. There is also an [online service](http\://launched.zerowidth.com/) to help you build your own..

## LaunchCtl
The following commands are self explanatory. If you change your plist you need to unload/load it again for the changes to take effect.

`launchctl list | grep com.task.name`
`sudo launchctl unload com.davidhampgonsalves.markov-tumblr.plist`
`sudo launchctl load -w com.davidhampgonsalves.markov-tumblr.plist`

_You can force a run of your task with `sudo launchctl start com.markov-tumblr`,_

## debug
The best way I have found is to keep a tail of the syslog running with\: `tail -F /var/log/system.log`. decipher any error numbers with `launchd error <error number>`.

