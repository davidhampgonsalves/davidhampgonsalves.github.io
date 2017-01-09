+++
title = "WebRTC in 5 Minutes"
date = "2015-05-23"
tags = ["webrtc"]
+++

While WebRTC has been around for awhile now but its still feels like a young technology and there are few resources to learn about it. These are the basics of how a connection is made between peers which is important for understanding how WebRTC differs from traditional networking.

## Creating a Connection
<br>
__Fetch ICE (Interactive Connectivity Establishment) Candidates from STUN server.__

* Contains details of how the data is going to be exchanged (ip, port, protocol).


__If STUN reports we are unreachable (behind a symetric NAT?) then we must use a TURN relay.__

* Need to use `TURN` relay since peer wont be able to directly connect to us.


__Make an offer SDP which contains meta-data about the data the peers will be sending.__

* SDL = session description protocol

__SDL is shared with peer via Signal Channel.__

* Signal channel can be anything from a websocket to word of mouth but WebRTC doesn't do this part.


__Remote party answers with their own SDP via Signal Channel.__
<br>
__Peers connect with information recieved SDP.__

<br>
<br>
_I learned about WebRTC in the context of [WebTorrent](https\://github.com/feross/webtorrent) which is an amazing project, you should check it out._
