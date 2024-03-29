
+++
title = "Projects"
+++
  <style>
  .project {
    border-bottom: 1px solid #ccc;
    padding: 2em 0;
  }

  .project h2 {
    font-size: 1.6em;
    text-transform: capitalize;
  }

  .project .header {
    display: flex;
    align-items: baseline;
    gap: 1em;
  }

  #content .header .date {
    margin-left: auto;
  }

  #content .header .project a.stars {
    text-decoration: none;
  }

  .container {
    display: flex;
    align-items: center; // for image scaling
  }

  .content {
    flex-grow: 1;
    margin-right: 1em;
  }

  .project ul li:before {
    content: "";
  }

  .project ul {
    display: flex;
    font-size: smaller;
    margin: 1em 0 2em 0;
  }

  .project li, .header .stars {
    border: 1px solid;
    border-radius: 8px;
    padding: 0 7px;
    text-wrap: nowrap;
  }

  .project img {
    width: 400px;
  }

  @media (max-width: 700px) {
    .header {
      flex-direction: column;
    }

    .header .date {
      margin-top: -2.3em;
    }

    .container {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .project ul {
      justify-content: center;
    }
  }
</style>
  
<div class=project>
  <div class=header>
    <h2>Solar Game of Life</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/Solar-Game-of-Life/stargazers>★ 15</a><span class=date>September 2022</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        E-ink version of Conways Game of Life powered by the sun
      </p>
      <ul>
        <li>e-ink</li> <li>esp32</li> <li>low-power</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/Solar-Game-of-Life">Github</a>, <a href="https://davidhampgonsalves.com/solar-powered-conways-game-of-life/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/solar-game-of-life.gif" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>Life Dashboard</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/Life-Dashboard/stargazers>★ 1263</a><span class=date>April 2018</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Low power, E-Ink dashboard for every day life running on a hacked Kindle.
      </p>
      <ul>
        <li>golang</li> <li>lambda-functions</li> <li>terraform</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/Life-Dashboard">Github</a>, <a href="https://davidhampgonsalves.com/life-dashboard/">Project Info</a>
      </div>
    </div>
    <img src="https://github.com/davidhampgonsalves/life-dashboard/raw/master/example.jpg" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>Wall Fountain</h2>
    <span class=date>June 2023</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        A wall hanging drip fountain powered by a 3D printed peristaltic pump 
      </p>
      <ul>
        <li>arduino</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/Wall-Fountain">Github</a>
      </div>
    </div>
    
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>CR14 emulator for CatGenie 120</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/CR14-emulator-for-CatGenie-120/stargazers>★ 62</a><span class=date>July 2018</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Suppress the CatGenie 120 DRM and refill soap cartridges using an Arduino
      </p>
      <ul>
        <li>arduino</li> <li>reverse-engineering</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/CR14-emulator-for-CatGenie-120">Github</a>, <a href="https://davidhampgonsalves.com/reverse-engineering-cat-genie-120-drm/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/cr14-emulator-for-catGenie-120.gif" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>Gif Twist</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/Gif-Twist/stargazers>★ 8</a><span class=date>April 2017</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Visualize time as frames radiating around a central point
      </p>
      <ul>
        <li>golang</li> <li>video-processing</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/Gif-Twist">Github</a>, <a href="https://davidhampgonsalves.com/gif-twist/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/gif-twist.apng.gif" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>Generative Tree Rings</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/Generative-Tree-Rings/stargazers>★ 6</a><span class=date>September 2015</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Vector Tree Ring Generator for Pen Plotting
      </p>
      <ul>
        <li>java</li> <li>paperjs</li> <li>penplotter</li> <li>svg</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/Generative-Tree-Rings">Github</a>, <a href="https://davidhampgonsalves.com/failed-projects-tree-ring-generation/">Project Info</a>
      </div>
    </div>
    <img src="https://github.com/davidhampgonsalves/tree-rings/raw/master/sample-01.jpg" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>music server</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/music-server/stargazers>★ 70</a><span class=date>March 2022</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Music streaming server on a Android Galaxy S7 
      </p>
      <ul>
        <li>android</li> <li>termux</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/music-server">Github</a>, <a href="https://davidhampgonsalves.com/junk-drawer-phone-as-a-music-streaming-server/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/music-server.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>Restaline</h2>
    <span class=date>February 2021</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Automatic SVG line fills for pen plotters (work in progress)
      </p>
      <ul>
        <li>javascript</li> <li>paperjs</li> <li>penplotter</li> <li>svg</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/Restaline">Github</a>
      </div>
    </div>
    <img src="https://github.com/davidhampgonsalves/Restaline/raw/main/example.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>plotted pixels</h2>
    <span class=date>June 2020</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        CLI for turning pixel art into vector based pen plotter ready images
      </p>
      <ul>
        <li>golang</li> <li>penplotter</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/plotted-pixels">Github</a>
      </div>
    </div>
    <img src="https://github.com/davidhampgonsalves/plotted-pixels/raw/master/header.jpg" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>generative surfboards</h2>
    <span class=date>February 2020</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Procedurally generated, vector based surfboards.
      </p>
      <ul>
        <li>javascript</li> <li>paperjs</li> <li>penplotter</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/generative-surfboards">Github</a>, <a href="https://www.instagram.com/p/B-peHn3pH2J/?img_index=1">Project Info</a>
      </div>
    </div>
    <img src="https://raw.githubusercontent.com/davidhampgonsalves/generative-surfboards/master/header.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>IR Schedule Thermostat</h2>
    <span class=date>January 2019</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        ESP8622 based heatpump temperature scheduling
      </p>
      <ul>
        <li>esp8622</li> <li>home-automation</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/IR-Schedule-Thermostat">Github</a>, <a href="https://davidhampgonsalves.com/esp-based-scheduling-thermostat/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/IR-Schedule-Thermostat.jpg" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>grow clock</h2>
    <span class=date>April 2018</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        ESP8622 powered, recyclable childrens grow clock
      </p>
      <ul>
        <li>arduino</li> <li>cardboard</li> <li>esp8622</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/grow-clock">Github</a>, <a href="https://davidhampgonsalves.com/arduino-grow-clock/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/grow-clock.apng.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>hugo black and light theme</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/hugo-black-and-light-theme/stargazers>★ 179</a><span class=date>January 2017</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        A High contrast, text oriented, performant and Javascript-free theme for Hugo.
      </p>
      <ul>
        <li>hugo</li> <li>hugo-theme</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/hugo-black-and-light-theme">Github</a>, <a href="https://themes.gohugo.io/themes/hugo-black-and-light-theme/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/hugo-black-and-light-theme.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>webhook liaison</h2>
    <span class=date>April 2016</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Orchestrate webhook enabled services via configuration using AWS lambda
      </p>
      <ul>
        <li>javascript</li> <li>lambda</li> <li>webhooks</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/webhook-liaison">Github</a>, <a href="https://davidhampgonsalves.com/webhook-liason/">Project Info</a>
      </div>
    </div>
    
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>slackline</h2>
    <span class=date>May 2015</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Quick templated Slack messages from terminal
      </p>
      <ul>
        <li>cli</li> <li>golang</li> <li>slack</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/slackline">Github</a>
      </div>
    </div>
    <img src="/images/projects/slackline.gif" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>opencv mosiac</h2>
    <span class=date>January 2015</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        An OpenCV based attempt at stitching together images to make a mosaic using histograms
      </p>
      <ul>
        <li>image-processing</li> <li>java</li> <li>opencv</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/opencv-mosiac">Github</a>, <a href="https://davidhampgonsalves.com/failed-projects-open-mosaic/">Project Info</a>
      </div>
    </div>
    <img src="https://raw.githubusercontent.com/davidhampgonsalves/opencv-mosiac/master/example.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>markov cloj</h2>
    <span class=date>December 2014</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Markov chain generator written in Clojure.
      </p>
      <ul>
        <li>closure</li> <li>java</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/markov-cloj">Github</a>, <a href="http://scrumdiddlyumptious-clojure.tumblr.com/">Project Info</a>
      </div>
    </div>
    
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>beets plugin play</h2>
    <span class=date>April 2014</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Beets plugin that sends the results of a music query to your music player.
      </p>
      <ul>
        <li>beets</li> <li>python</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/beets-plugin-play">Github</a>, <a href="https://beets.readthedocs.io/en/latest/plugins/play.html">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/beets-plugin-play.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>interview resources</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/interview-resources/stargazers>★ 430</a><span class=date>January 2014</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        long list of resources for preparing for technical computer engineering interviews
      </p>
      <ul>
        <li>interview-preparation</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/interview-resources">Github</a>
      </div>
    </div>
    
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>crime heatmaps</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/crime-heatmaps/stargazers>★ 13</a><span class=date>January 2014</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Halifax crime heatmap for apps4halifax contest. 
      </p>
      <ul>
        <li>javascript</li> <li>mapbox</li> <li>opendata</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/crime-heatmaps">Github</a>
      </div>
    </div>
    <img src="https://github.com/davidhampgonsalves/crime-heatmaps/raw/master/crime-heatmap.gif" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>Contact Identicons</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/Contact-Identicons/stargazers>★ 30</a><span class=date>January 2014</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Android app that generates identicons for contact photos
      </p>
      <ul>
        <li>android</li> <li>java</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/Contact-Identicons">Github</a>, <a href="https://davidhampgonsalves.com/generating-identicons/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/contact-identicons.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>notefeeder</h2>
    <span class=date>May 2013</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Small web application that lets you save urls and notes from your current page.
      </p>
      <ul>
        <li>bookmarklet</li> <li>ruby-on-rails</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/notefeeder">Github</a>, <a href="https://davidhampgonsalves.com/notefeeder/">Project Info</a>
      </div>
    </div>
    <img src="https://raw.githubusercontent.com/davidhampgonsalves/notefeeder/master/notefeeder.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>photobooth</h2>
    <span class=date>March 2012</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Python based photo booth  using a webcam and a printer
      </p>
      <ul>
        <li>opencv</li> <li>python</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/photobooth">Github</a>, <a href="https://davidhampgonsalves.com/diy-photobooth/">Project Info</a>
      </div>
    </div>
    <img src="https://raw.githubusercontent.com/davidhampgonsalves/photobooth/master/photobooth-01.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>hourweather</h2>
    <span class=date>August 2011</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Location aware hourly weather which reuses the code from hourly weather
      </p>
      <ul>
        <li>javascript</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/hourweather">Github</a>, <a href="https://www.davidhampgonsalves.com/hourweather/">Project Info</a>
      </div>
    </div>
    <img src="/images/projects/hourweather.png" />
  </div>
</div>

<div class=project>
  <div class=header>
    <h2>Live RSS Bookmarks</h2>
    <a class=stars href=https://api.github.com/repos/davidhampgonsalves/Live-RSS-Bookmarks/stargazers>★ 37</a><span class=date>December 2010</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        Chrome extension that adds Firefox like RSS/Atom handling
      </p>
      <ul>
        <li>chrome-extension</li> <li>javascript</li> <li>rss</li>
      </ul>
      <div class=links>
        Links: 
          <a href="https://github.com/davidhampgonsalves/Live-RSS-Bookmarks">Github</a>, <a href="https://davidhampgonsalves.com/13-years-of-foxish/">Project Info</a>
      </div>
    </div>
    <img src="https://raw.githubusercontent.com/davidhampgonsalves/Live-RSS-Bookmarks/master/images/header.svg" />
  </div>
</div>
