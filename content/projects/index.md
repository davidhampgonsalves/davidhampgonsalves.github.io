+++
title = "Projects"
+++

<style>
  .project {
    border-bottom: 1px solid #ccc;
    padding: 2em 0;
  }

  #content .project h2 {
    font-size: 1.6em;
  }

  #content .project .header {
    font-size: 1.5em;
    margin-bottom: 0.8em;
  }

  #content .project .header :first-child {
    margin-right: 0.5em;
  }

  #content .project .header .date {
    font-size: 0.8em;
    color: #555;
  }

  .container {
    display: flex;
  }

  .content {
    flex-grow: 1;
  }

  .headline {
    font-size: 1.1em;
    margin-bottom: 1em;
  }

  .container .images {
    margin-left: 1em;
    flex: 0 0 8em;
  }

  .container .images-lg {
    margin-left: 1em;
    flex: 0 0 15em;
  }

  .container.image-row {
    flex-direction: column;
  }

  .container.image-row .images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em 0 0;
    flex-basis: initial;
  }


  .container .images img {
    margin: 0;
    width: 100%;
  }

  .container .images .image {
    flex: 0 0 30%;
  }

  .container.image-row .images img {
    width: initial;
    margin: 0;
  }

  .container .links {
    margin-top: 1em;
    font-weight: bold;
  }

  .container .links a {
    font-weight: normal;
  }
</style>

<div class=project>
  <h2 class=header>
    <span>CatGenie 120 Cartridge Reader Emulator </span>
    <span class=date>July 2018</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Bypasses the DRM in the CatGenie 120 by emulating the RFID reader with an Arduino.
      </div>
      <p>
        The CatGenie is an self cleaning cat litter box. It locks users into using its own cleaning solution via RFID tags embeded in the carterages. I reverse engeneered the communication method and wrote code to emulate it using an Arduino.
      </p>

      <div class=links>
        Links: <a href="/">Github</a>, <a href="/reverse-engineering-cat-genie-drm/">Blog Post</a>
      </div>
    </div>
    <div class=images-lg>
      <img src="//github.com/davidhampgonsalves/CR14-emulator-for-CatGenie-120/raw/master/catgenie.gif" />
    </div>
  </div>
</div>


<div class=project>
  <h2 class=header>
    Arduino based Grow Clock
    <span class="date">April 2018</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Low power Arduino based Grow Clock.
      </div>
      <p>
        A grow clock is a simple visual indicator of day and night. The goal is to convince them to sleep till a humane hour.
      </p>

      <p>
        My version was made to be recyclable, since these devices are only useful for the short time before children can read a traditional clock.
      </p>

      <div class=links>
        Links: <a href="//github.com/davidhampgonsalves/grow-clock">Github</a>, <a href="/arduino-grow-clock/">Blog Post</a>
      </div>
    </div>
    <div class=images-lg>
      <img src="/images/projects/grow-clock.gif" />
    </div>
  </div>
</div>


<div class=project>
  <h2 class=header>
    Scheduled Harvest Invoice Generation
    <span class="date">Nov 2017</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Automated invoice generation for <a href="//www.getharvest.com/">Harvest</a>.
      </div>
      <div class=links>
        Links: <a href="//github.com/davidhampgonsalves/harvest-automation">Github</a>, <a href="/harvest-automation/">Blog Post</a>
      </div>
    </div>
  </div>
</div>

<div class=project>
  <h2 class=header>
    GIF Twist
    <span class="date">July 2017</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Animate time radially around a central point
      </div>
      <p>
        These animations contain small slices of every frame from the input animation in each output frame. Each one is offset based on its occurance and rotated around the center.
      </p>
      <p>
        It produces interesting results when used on stationary timelapses and is a fun way to visualize the passing of time.
      </p>

      <div class=links>
        Links: <a href="//github.com/davidhampgonsalves/Gif-Twist">Github</a>, <a href="/gif-twist/">Blog Post</a>
      </div>
    </div>
    <div class=images-lg>
      <img src="/images/projects/gif-twist.gif" />
    </div>
  </div>
</div>

<div class=project>
  <h2 class=header>
    Webhook Liaison
    <span class="date">April 2016</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        A configurable filtering/transforming proxy for Webhooks / HTTP requests.
      </div>
      <p>
        <a href="//aws.amazon.com/lambda/">AWS Lambda</a> hosted webook glue to connect services together with minimal overhead using <a href=//jmespath.org/>JMESPath</a> transformations and filters.
      </p>

      <div class=links>
        Links: <a href=//github.com/davidhampgonsalves/webhook-liaison>Github</a>, <a href="/webhook-liaison/">Blog Post</a>
      </div>
    </div>
  </div>
</div>


<div class=project>
  <h2 class=header>
    Black & Light Hugo Theme
    <span class="date">Jan 2016</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        A High contrast, text oriented, performant and Javascript-free theme for Hugo.
      </div>
      <p>
        I ported my blog from Octopress to Hugo + GitHub pages and brought the theme I originally created with me. Its since been added to the official <a href=//themes.gohugo.io/black-and-light/>Hugo theme repository<a/>.
      </p>

      <div class=links>
        Links: <a href="//github.com/davidhampgonsalves/hugo-black-and-light-theme">Github</a>, <a href="/hugo-black-and-light-theme/">Blog Post</a>
      </div>
    </div>
    <div class=images>
      <img src="/images/projects/hugo.png" />
    </div>
  </div>
</div>


<div class=project>
  <h2 class=header>
    SVG Tree Rings
    <span class="date">Auguest 2015</span>
  </h2>
  <div class="container image-row">
    <div class=content>
      <div class=headline>
        Generate scalable vector graphics representation of tree growth rings.
      </div>
      <p>
        Tree rings are artifacts of a trees life. Each ring is the record of how favorable the growing conditions were in 2 dimensions. I tried to replicate this programatically to generate realistic tree rings. I wasn't happy with the results at the time but in hindsight I think they look pretty good.
      </p>
      <div class="links">
        Links: <a href="//github.com/davidhampgonsalves/tree-rings">Github</a>, <a href="/failed-projects-tree-ring-generation/">Blog Post</a>
      </div>
    </div>
    <div class=images>
      <div class=image>
      <img src="//davidhampgonsalves.github.io/images/tree-rings/willow-env.png" />
      </div>
      <div class=image>
      <img src="//davidhampgonsalves.github.io/images/tree-rings/hemlock.png" />
      </div>
      <div class=image>
      <img src="//davidhampgonsalves.github.io/images/tree-rings/pine.png" />
      </div>
    </div>
  </div>
</div>

<div class=project>
  <h2 class=header>
    Slackline
    <span class="date">Jul 2015</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Post updates/messages to slack from the cmd line.
      </div>
      <p>
        When working remotely it can encourage community and colaboraton if you regularly update a channel with what you are woring on. Slackline lets you do this with a single command right from your terminal to minimize disruption.
      </p>
      <div class=links>
        Links: <a href="//github.com/davidhampgonsalves/slackline">Github</a>
      </div>
    </div>
    <div class=images-lg>
      <img src="/images/projects/slackline.gif" />
    </div>
  </div>
</div>

<div class=project>
  <h2 class=header>
    Markov-chain generator in Clojure
    <span class="date">January 2015</span>
  </h2>
  <div class=container>
    <div class=content>
      <p>
        A Markov-chain implementation in Clojure that I trained using Clojure reference documents and childrens books by Roald Dahl. It generates a small snippit of wisdom each day and posts to <a href=//scrumdiddlyumptious-clojure.tumblr.com/>Tumblr</a>.
      </p>
      <div class=links>
        Links: <a href=//github.com/davidhampgonsalves/markov-cloj>Github</a>, <a href="/markov-chains-in-clojure/">Blog Post</a>, <a href=//scrumdiddlyumptious-clojure.tumblr.com/>Tumblr Account</a>
      </div>
    </div>
  </div>
</div>


<div class=project>
  <h2 class=header>
    Beets Play Plugin
    <span class="date">April 2016</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Official plugin for Beets to send music queries to your media player
      </div>
      <p>
        <a href=//github.com/beetbox/beets>Beets</a> is a cli music manager and tagger. I wrote a plugin that lets you play the result of a music query in your media player. Since then it has been added to the list of officially supported Beets plugins and is actively maintained by the Beets community.
      </p>
      <div class=links>
        Links: <a href=//github.com/beetbox/beets/blob/master/beetsplug/play.py>Github</a>, <a href=//beets.readthedocs.org/en/latest/plugins/play.html>Docs</a>
      </div>
    </div>
    <div class=images>
      <img src="/images/beets.png" />
    </div>
  </div>
</div>


<div class=project>
  <h2 class=header>
    Ethical Barcode App
    <span class="date">April 2014</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Scan product barcodes to uncover the ethics of its brand
      </div>
      <p>
        Ethical Barcode exposes the environmental, social and ethical ramifications of the products you buy. It is backed by a large suite of web crawlers that collect and update research from non-profits to provide users with relevant data as they shop.
      </p>
      <p>
        Ethical Barcode is unique in this space as it works at the brand level. This allows the app the provide company level details by linking the barcode to the brand and then follow its ownership chain to expose potential issues at each level.
      </p>
      <div class=links>
        Links: <a href=//www.ethicalbarcode.com>Website</a>, <a href=//itunes.apple.com/us/app/ethical-barcode/id741605912?ls=1&mt=8>iTunes</a>, <a href="//play.google.com/store/apps/details?id=com.davidhampgonsalves.ethicalbarcode">Google Play</a>
      </div>
    </div>
    <div class=images>
      <img src="/images/projects/ethical-barcode.png" />
    </div>
  </div>
</div>

<div class=project>
  <h2 class=header>
    One Tap Record for Strava
    <span class="date">April 2014</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Start a Strava ride with a single tap
      </div>
      <p>
        Small launcher for Strava that uses its NFC intents to start the app and a ride at the same time.
      </p>
      <div class=links>
        Links: <a href="//play.google.com/store/apps/details?id=com.onetapstrava">Google Play</a>
      </div>
    </div>
    <div class=images>
      <img src="/images/projects/strava-one-tap.webp" />
    </div>
  </div>
</div>

<div class=project>
  <h2 class=header>
    Identicon Generator and Android App
    <span class="date">November 2013</span>
  </h2>
  <div class=container>
    <div class=content>
      <p>
        I wrote an identicon generator after becoming interested in Github implementation shortly after launch. I then wrapped it in an Android app to allow users to generate identicons for thier contact lists.
      </p>
      <div class=links>
        Links: <a href=//github.com/davidhampgonsalves/Contact-Identicons>GitHub</a>, <a href=/generating-identicons/>Blog post</a>, <a href=//play.google.com/store/apps/details?id=com.davidhampgonsalves.contactidenticons>Google Play</a>
      </div>
    </div>
    <div class=images>
      <img src="/images/projects/contact-identicons.webp" />
    </div>
  </div>
</div>

<div class=project>
  <h2 class=header>
    Halifax Crime Heatmap
    <span class="date">September 2013</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Animated heatmap of reported crimes in Halifax
      </div>
      <p>
        My entry for the Apps4Halifax Open Data contest which won second place.
      </p>
      <div class=links>
        Links: <a href=//github.com/davidhampgonsalves/crime-heatmaps>GitHub</a>, <a href=//www.crimeheatmap.ca/>Website</a>, <a href=/apps4halifax-crime-heatmaps/>Blog post</a>
      </div>
    </div>
    <div class=images-lg>
      <img src="/images/projects/crime-heatmap.gif" />
    </div>
  </div>
</div>

<div class=project>
  <h2 class=header>
    Foxish Live RSS
    <span class="date">December 2010</span>
  </h2>
  <div class=container>
    <div class=content>
      <div class=headline>
        Chrome/Chromium extension that enables Firefox like RSS handling
      </div>
      <div class=links>
        Links: <a href=//github.com/davidhampgonsalves/foxish>GitHub</a>, <a href=//chrome.google.com/webstore/detail/foxish-live-rss/jpgagcapnkccceppgljfpoadahaopjdb>Chrome Web Store</a>, <a href=/foxish/>Blog post</a>
      </div>
    </div>
    <div class=images>
      <img src="/images/projects/foxish.png" />
    </div>
  </div>
</div>

# Archived

- [Speed Reading Bookmarklet](/spritz-like-rsvp-reader-bookmarklet/)
- [Hour Weather](//hourweather.herokuapp.com/)
- [Yule Log](/html5-canvas-yule-log/)
- [Hourly Weather](//play.google.com/store/apps/details?id=com.hourlyweather&hl=en)
- [Notefeeder](/notefeeder/)
