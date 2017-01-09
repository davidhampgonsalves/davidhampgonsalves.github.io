+++
title = "Building Dolphin-Emu on Fedora"
date = "2013-01-20"
tags = ["Fedora"]
+++
Over the holidays I wanted to play some old game cube games to be festive(Christmas means new games). After some performance troubles I noticed that the version of the Dolphin Emulator I was using from the Fedora repos was version 3 and the current was 3.5. Eventually I broke down and built the latest version, which did make my life/performance better.

Bellow is the **command to install all the build dependancies** and after that the build should go smoothy and you'll be up and running in no time.

```bash
sudo yum install build-essentials git cmake-fedora gcc-c++ wxGTK-devel SDL-devel Cg bluez-libs-devel readline-devel alsa-lib-devel pulseaudio-libs-devel libao-devel openal-soft-devel ffmpeg-devel glew-devel lzo-devel portaudio-devel
```

After that you can follow the official guide [here](https\://code.google.com/p/dolphin-emu/wiki/Linux_Build).
