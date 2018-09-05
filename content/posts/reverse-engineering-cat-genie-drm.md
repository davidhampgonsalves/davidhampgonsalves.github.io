---
title: "Reverse Engineering Cat Genie 120 DRM"
date: 2018-07-17T20:02:31-03:00
---

_**TLDR**: My robot cat litter box bricks itself after a set number of washes with each soap cartridge so I reverse engineered and suppressed the verfication process to enable refilling._

<img src="//github.com/davidhampgonsalves/CR14-emulator-for-CatGenie-120/raw/master/catgenie.gif" class="right-justify" style="width: 280px; margin-left: 1em" />

### Problem
I bought a robot cat litter box called the CatGenie 120 and it was great... until I realized that the helpful low soap warning was actually DRM which blocks all cleaning actions once its official soap cartridge is "empty".

I hadn't done anything like this previously but through listening to the [Unnamed Reverse Engineering Podcast](//reverseengineering.libsyn.com/) over the previous few months I felt I knew enough about the tools and techniques required to get started.

### Research
Looking at the cartridge I found an RFID tag under the label. Initially, still thinking the device bricking might be more oversight then malicious business strategy, I tried an unrelated RFID tag but it was rejected.

Online I found that someone named MindBender had already suppressed these limitations and was selling a closed source solution called the [CartridgeGenius](http://cartridgegenius.com/). They were out of stock at the time and I wasn't sure more were coming so pressed on. Knowing that MindBender was suppressing the DRM by replacing the RFID reader remedied a concern I had regarding the possibility of usage counts being stored on the main board in EEPROM.

Next I took the device apart and removed the RFID reader. Based on its markings and Googling I identified it as a CR14 made by [ST](//www.st.com/) and found a copy of the [datasheet](https://github.com/davidhampgonsalves/CR14-emulator-for-CatGenie-120/raw/master/CR14-datasheet.pdf).

### Probing
From the datasheet I knew that the main device was communicating with the CR14 via I2C. I had learned about cheap logic analyzers and [Sigrok](//sigrok.org/) from the podcast so I ordered one off of AliExpress for 5$ and waited. Once it arrived I ran into a series of issues. First the wires that connect to the chip used incorrect colors(I think to be misleading) and combined with this being my first time using a logic analizer it took me awhile to figure out. After that my lack of knowledge about I2C and signal analyzers sampling rates caught up to me and killed another few days of free time.

Eventually I got everything working and recorded my first accurate signal capture:

![](/images/cr14/sigrok-screenshot-1.png)

### Reverse Engineering
Things get a bit hand wavy here but based on what I was seeing in SIGROK and what I had read in the datasheet I mapped out the basic repeating sequence which comprised the tag validation process. If you are intersted take a look at the [sigrok captures](//github.com/davidhampgonsalves/CR14-emulator-for-CatGenie-120/raw/master/tag-validation.sr) or read the commented [source code](//github.com/davidhampgonsalves/CR14-emulator-for-CatGenie-120/blob/master/src/main.cpp) which documents how it works.

### Arduino Based CR14 Emulator
After I had a rough idea of what the main board was expecting from the CR14 I wrote some code for an Arduino to emulate it. I ran into issues using Serial writes in the I2C response call backs, I think because they slowed the responses down but eventually I figured that out and switched to using the logic analyzer to debug what was happening. As I worked on this, sitting on the cold bathroom floor the CatGenie serinaded me with angry beeps every few seconds. Finally getting the tag validation working and stopping the beeping was a relief. If I knew how long I would be sitting there I would have located and disabled the beeper.

After the beeping stopped I realized that there was still more work to be done as the CatGenie wouldn't actually start. I captured [more samples](//github.com/davidhampgonsalves/CR14-emulator-for-CatGenie-120/raw/master/write-remaining-count.sr) right as I pressed the start button and found the logic that decrements the usage count. Once I implemented that portion of the logic I was able to successfully run the device.

![](/images/cr14/sigrok-screenshot-2.png)

### Closing
If you want to perform similar modifications as these check out the [git repo](//github.com/davidhampgonsalves/CR14-emulator-for-CatGenie-120) and it will guide you through the process.

Another alternative is to run a opensource firmware also created by the author of the CartridgeGenius called [CatGenius](https://github.com/CatGenius/catgenius/) but if you choose this route know that you can't revert back to the original firmware.

*Press:* [Hackaday](https://hackaday.com/2018/09/04/doing-logic-analysis-to-get-around-the-catgenies-drm/), [Hacker News](https://news.ycombinator.com/item?id=17858218) and the [Unnamed Reverse Engineering Podcast](https://reverseengineering.libsyn.com/015-updates).
