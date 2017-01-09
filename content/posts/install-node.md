+++
title = "Install Node.js / NPM on Fedora Core 17"
date = "2012-10-18"
tags = ["Fedora", "Nodejs"]
+++
This is just a short and sweet set of commands to install Nodejs and NPM on Fedora 17.

## Versions
* Fedora Core 17
* node.js 0.8.9


## The Guts(go bash go!)
```bash
sudo yum install openssl-devel.i686 gcc gcc-c++
sudo ./configure
sudo make -j2
sudo make install

su
cd /tmp
git clone https\://github.com/isaacs/npm.git
cd npm
make install
exit
```

*Most of this was based on an older post I found [here](http\://johnroach.info/2011/11/20/installing-node-js-0-6-2-on-fedora-16/).*
