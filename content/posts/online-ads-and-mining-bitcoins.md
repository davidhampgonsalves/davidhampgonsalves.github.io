+++
title = "Generating Bitcoins using Online Ads"
date = "2013-08-02"
tags = ["Javascript", "Bitcoin"]
+++

After reading about using [online ads to launch a javascript based DDoS attack](http\://threatpost.com/buy-an-ad-own-a-browser-botnet) I started wondering about how well such a system would do at mining bitcoins. These are my *rough calculations.*

From my research I've found there are 3 ways to mine bitcoins(compute hashes) using Javascript\:

* *UI thread* (I was seeing about 800 hashes/s)
* Multiple threads via *WebWorkers* (I was seeing about 13000 hashes/s)
* Using the GPU via *WebGL* ([limited browser support](http\://caniuse.com/webgl) couldn't find working example).

_I based my numbers on this implementation\:_ (http\://bitcoin.biniok.net/gl.html) running chrome on a pentium 4. The rates are averages over 5 seconds.


I'll show the math for WebWorkers since they have pretty [decent support](http\://caniuse.com/webworkers).

So lets say that we want 1 Million computers calculating hashes using webworkers at a rate of 13000 hashes/s. If we _assume_ that each ad view results in 5 seconds of computing time then we can calculate the required number of ad views like\:

	(2 592 000(seconds in month) / 5 (seconds per ad view)) * 1 000 000(number of computers required at any time)
	 =
	518 400 000 000(number of ad views required month)

Using [this](http\://www.bitcoinx.com/profit/) bitcoin calculator we can see that our distributed system will earn us 6326.96 USD a month negating all costs.


*final numbers\:* 5 Billion pageviews **≈** 6000USD


So unless you can really crank up the hash rate this endeavor isn't going to facilitate early retirement.
