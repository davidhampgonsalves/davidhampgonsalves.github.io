+++
title = "Webhook Liason"
date = "2016-05-01"
+++

Webhook are the glue between many internet services but in many cases developers will write little bits of code to help translate payloads between such services and make them compatible.

Webhook Liason was designed to address these requirement via configurable filtering/transforming proxy for Webhooks / HTTP requests. This allows the conversion of request data to JSON, limits subsequent requests via filters and finally transforms the request JSON into the destination(s) format to be sent.

It also run on [AWS Lambda](https://aws.amazon.com/lambda/) which means that setup and maintenance time is very low and also your usage will probably all fall in the free tier.
