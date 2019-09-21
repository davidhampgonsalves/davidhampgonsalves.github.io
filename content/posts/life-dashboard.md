---
title: "Life Dashboard"
date: 2019-02-01T20:02:31-03:00
---

Second hand Kindles are waiting in drawers for someone to repurpose them into something great. Boasting large e-ink screens, wifi connectivity and ARM processors they are an amazing hacking platform.

Check out the project [repository](https://github.com/davidhampgonsalves/life-dashboard) for more details.

<img src="/images/life-dashboard-01.jpg" />

In my case I created an information panel summarizing my day such as my calendar, surf and weather forecast, garbage schedule, school closures, etc. My favorite part is that any extra space is filled with a random Pokémon sprite which my kids(not me) like to come check in on.

## Implementation
The project uses a serverless backend to collate data from external services and on the Kindle itself Rust code (cross compiled via docker) fetches and typesets the data into an image.

I could have avoided the backend of this project and only used the Kindle but I had already created it when I planned on using a dedicated e-ink display and it saved time to still use it.

## Reusability
I built a stand rather then the more standard frame because the e-reader functionality of the Kindle is still present and can be picked up and used without modification. I also thought it was important to avoid obscuring the original device and celebrate its reuse.

## Kindle Hacking Notes
The [mobileread forum](https://www.mobileread.com/forums/) is the place for mobile reader hacking.

My Kindle (KT 4) does not provide access to the RTC, but if I ever find a Kindle Paper White I would be able to sleep the device and run it unplugged for months between changes.

<img src="/images/life-dashboard-02.jpg" />

<img src="/images/life-dashboard-03.jpg" />

<img src="/images/life-dashboard-04.jpg" />
