+++
title = "Terminal GIFs on OSX"
date = "2015-04-07"
tags = ["ttyrec"]
+++

Using Gifs for terminal explanations and usages aren't new and exciting anymore but they are still useful. This is how to create them quickly on OSX.

## Install
The tool we will use to capture our gif [ttygif](https\://github.com/icholy/ttygif).
```sh
brew install imagemagick ttyrec
brew install https\://raw.githubusercontent.com/icholy/ttygif/master/ttygif.rb
```

## Gif
The process of creating the gif is\:
* Run `ttyrec` which records your terminal session as series of `png` files.
* Run `ttygif` to convert the `png` files to small `gifs`.
* Concat the `gif` files using the concat script.
* Edit the final `gif` using whatever tool or online site you like.

```sh
#creates series pngs(type exit to finish recording)
ttyrec recording-name
#convert png -> gif(-f disables cropping)
ttygif recording-name -f
#concat gif parts into final product
concat_osx.sh recording-name.gif
```

# Example
![](/images/terminal-gif-example.gif)
