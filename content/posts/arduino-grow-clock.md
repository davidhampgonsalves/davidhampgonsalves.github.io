+++
title = "Arduino Grow Clock"
date = "2018-03-15"
+++


A grow clock is a simple visual indicator of day and nigh. Its purpose is to help children understand day and night and to convince them to stay in bed sleeping until the world is ready to get up.

{{< figure src="/images/projects/grow-clock.gif" >}}

My version was made to be recyclable, since these devices are only useful for the short time before children can read a traditional clock.

I its comprised of a servo and an Arduino MKR1000 (because I had a spare one) but any Arduino compatible board with a RTC(real time clock) will work. The MKR1000 is well suited to this task due to its as low power consumption in standby.
