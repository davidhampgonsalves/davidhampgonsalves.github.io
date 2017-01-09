+++
title = "Markov Chains in Clojure"
date = "2015-01-01"
tags = ["clojure"]
+++

I noticed that when you enter 30 into tumblrs age field it switches from "years old" to "years young". Fully grasping the limited scope of my existence for the first time I wrote a [Markov Chain](http\://en.wikipedia.org/wiki/Markov_chain) generator so that it could provide(tenuous) value long after I have fled this mortal coil, by mashing up the works [of Roald Dahl with some Clojure manuals](http\://scrumdiddlyumptious-clojure.tumblr.com/).

When you reach this point in your life you can save some time and use my [Clojure implementation](https\://github.com/davidhampgonsalves/markov-cloj) or write your own.

If you write your own, here are some pointers\\:

* Don't remove punctuation, all that data is valuable.
* The training material quality is of the utmost importance.
* Similar training materials will intertwine more often and lead to more interesting results.
* Avoid works that contain made up words/spellings, they will lead to boring chains.
* Longer state lengths(how many words are considered when calculating next state) lead to more readable but boring text.
