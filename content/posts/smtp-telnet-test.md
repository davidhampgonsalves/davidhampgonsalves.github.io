+++
title = "SMTP Test/Usage Via Telnet"
date = "2011-11-09"
tags = ["SMTP", "Telnet"]
+++
A telnet client is a handy testing tool for testing connectivity between servers. Today I needed to test an SMTP server connection from a linux environment so I wrote the following script. You could use the same technique manually to do the same thing as long as your have access to a telnet client.

## Usage
The script takes three parameters\: the smtp server url, the sender address and the recipient address.
```bash
#!/usr/bin/env bash
	(echo HELO
	 sleep 10
	 echo MAIL FROM\:$2
	 sleep 10
	 echo RCPT TO\:$3
	 sleep 10
	 echo DATA
	 sleep 10
	 echo .
	 sleep 10
	 echo QUIT) | telnet $1 25
```
