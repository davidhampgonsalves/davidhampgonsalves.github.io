---
title: "ESP Based Scheduling Thermostat"
date: 2019-04-01T20:02:31-03:00
---

I moved into a house that uses a few mini split heatpumps for temperature control and while the technology is efficient and amazing interacting with them is not. Each unit eschews the standard thermostat wiring and standards in favor of implementing their own baked in system.

In my case this means that I can't schedule temperature changes through the day or even set temperatures outside of a small range (16°-25° C).

To get around all this I used an ESP-8622 to download the temperature schedule for the corresponding unit and then transmit each temperature change or power event via IR in the same way that the remote does.

Check out the project [repository](https://github.com/davidhampgonsalves/IR-Schedule-Thermostat) for more details.

<img src="/images/esp-thermostat.jpg"  />

## Schedule
The ESP will fetch the [schedule](https://github.com/davidhampgonsalves/davidhampgonsalves/IR-Schedule-Thermostat/blob/master/schedules/3.json) that corresponds with its node number every 2 days. They use tuples to keep the payload small to reduce memory usage on the ESP in the form: `[hour, minute, power(boolean), temperature]`.

## IR
Heatpump and AC IR signals are typically huge. So large in fact that most IR libraries will break trying to process the signals. This is because each time you press a button on the remote the entire state of the unit is transmitted.

I used the very capable [markszabo/IRremoteESP8266](https://github.com/markszabo/IRremoteESP8266) library to capture each IR state which are then replayed by the ESP as required.

## Power Usage

The ESP deep sleeps between updates so after removing the voltage regulator so it can run on a small battery for months.
