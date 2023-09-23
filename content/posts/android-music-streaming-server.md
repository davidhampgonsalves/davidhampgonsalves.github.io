+++
title = "Junk Drawer Phone as a Music Streaming Server"
date = "2023-04-23"
+++

<img src="/images/android-music-server.jpg" width=100%> 

I wanted to get a music streaming server running as I have in the past but with the scarcity of RasberryPi's my I needed to try something new. I had a Samsung Galaxy S7 that had been taking up space in my junk drawer and this post is my journey to give it a new task.

First step was remembering why I stopped using it. Trying to charge it revealed that the charging port was broken. I didn't want to dig too deeply into the device but I got lucky and was given another S7 with a bad battery. After destructively taking them apart I was able to swap the batteries and get a working device.

## First Try, No Root, Stock Android
Ideally I wouldn't have to root the phone and could just get it to take on its new role using its current fireware.

With that goal in mind my first attempt was using [Termux](https://github.com/termux). It is an awesome terminal emulator wrapped up as an Android app.

One of Termux limitations is that it can't run binaries even if they have been built for a matching ARM archetecture. As such I had to build my music streaming server of choice, [Navidrome](https://github.com/navidrome/navidrome) on the device. One hickup with this process is that the JS build process eats up all the RAM on the device but building it on a larger machine and sending it over sidesteps that issue and the Go build process can then bundle it up.

Once I got everything setup I had a working music server BUT because of the limited RAM of the S7, Termux seemed to get agressively killed by Android, even though it was an old device running Android v6 (which didn't have many of the battery optimizations to kill apps). Even with termux-wake-lock, termux:Boot and everything setup as rundit services I would see server outages.

After a few days I tried again.

## Second Try, PostmarketOS

[PostmarketOS](https://postmarketos.org/) would be ideal for this kind of project and would turn the phone into a reliable linux box BUT unless you happen to have (or buy) one of the devices that are well supported you either need to get lucky with one of the non-mainline (testing) devices. In my case there have been working builds but after I got everything on the device it turned out that support had regressed and it is currently (at the time of writing) non-bootable.

It would proably be fun but timeconsuming to learn enough about the ecosystem so I shelved the project for a couple days until...

## Third Try LineageOS
Having run [LineageOS](https://lineageos.org/) in the past I thought it might be lightweight enough to free up enough RAM for Termux to be more long lived. Setting this up was straightforward since I already had [TWRP](https://twrp.me/) recovery on the device from the PostmarketOS attempt.

Once LineageOS was on the device I disabled/uninstalled everything non-essential and repeated my setup process from my initial Android attempt. My setup looks like:

* Termux, Termux:Services, Termux:Boot
* Navidrome
* ssh + sftp via openssh
* Dynamic DNS via Cloudflare via [timothymiller/cloudflare-ddns](https://github.com/timothymiller/cloudflare-ddns)

All my music wouldn't fit on the devices internal memory and not having a spare SD card I decided to transcode it all to OPUS. I then found out that it isn't supported in IOS (and I currently use an IPhone) unless its in a CAF container and Navidrome doesn't support CAF. Thus I transcoded everything to mp3 at a lower bitrate that was still acceptable to my ears.

With that I have a faily powerful and reliable music server(based on a few weeks of usage). I'm keeping an eye out for any devices with good PostmarketOS support to try that again.

The setup guide for this can be found on [github](https://github.com/davidhampgonsalves/music-server).

### Coverage
You can read more about this project on [Hackaday](https://hackaday.com/2023/04/27/using-an-old-smartphone-in-place-of-a-raspberry-pi/) and the discussion about it was quite informative. It was also discussed on [HackerNews](https://news.ycombinator.com/item?id=35747379).