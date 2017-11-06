---
title: "About travelling, the idea, Gatsby and blogging."
cover: "/cover/jonathan-en-nina-mountains.jpg"
date: "04/11/2017"
category: "general"
tags:
    - programming
    - blogging
    - fun
    - gatsby
---

## TLDR
All topics in the title deserve their own post..this post TLDRs all of them.🤠

[If you're specifically interested in how I did the setup of my blog with Gatsby, skip the rest.](#gatsby)

## Travelling

We're currently roadtrippin' back from France to Belgium. We come from the Alps, going back home.
And in the car next to my 4 month old baby, I came up an idea...

[Interested in more details about our journey?](/one-week-off-to-the-alps-and-back)

## The idea - things worth blogging

The idea is simple. I am a software developer, learning new things (almost) every day.
> A day without learning is a day without developing.

And as the way I've learned all of my developer skills is through the online community, I want to give something back. I want to take you on my own day-to-day journey and post a small thing I've learned that day.

> Sharing is caring

[More about the idea](/the-idea)

## Gatsby

Yes, I chose Gatsby. Here's why.

For me Gatsby is bringing it all together.

### React
Since more then two years I'm working with React, and [I'm loving it ever since](/http://www.easybird.be/en/blog/future-react). Because of the resistance for big client-side application that I cultivated after working with Angular 1, I immediately started using the *server-side* or *universal* rendering "feature" in React. But after a while, I realised that for *simple and mostly static websites*, like a blog, the constant real-time rendering on a node server is overkill.. And here's where the JAMstack came into play.

### The JAMstack
> JAMstack: noun \’jam-stak’\ Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup. [cfr. JAMstack website](https://jamstack.org/)

Basically, the JAMStack is a fancy word for a modern static website.😇 But as this wouldn't seem like *something new*, they invented a new word for it. [This podcast](https://www.heavybit.com/library/podcasts/jamstack-radio/ep-2-the-jamstack-origin-story/) with Matt Billmann, the co-found and CEO of [Netlify](http://netlify.com) explains how the name came into play.

> Old wine in new bottles

Anyway, the world of software development is always on the move, and as in the most recent years we moved from the server, to client-side and back, the jamstack is about hosting static (on a cdn) whatever we can, using markup for our content and smartly using micro api's to do the rest. It's all about using cli's for pre-rendering, and external api's or lambda functions for "back-end related matter". When following all the ins and the outs in the world of web development, this seems like a logical next step. Pretty neat and clean, isn't it?

> Note: Specifically interested in my setup using Gatsby? Then go straight to the [code](/setup-your-own-blog-site-in-no-time-with-gatsby).

### Why Gatsby?
[This website](https://www.staticgen.com/) tries to bundle all the static site generators. I've tried [Hugo](http://gohugo.io/), a lighting fast framework for building static sites. It's written in Go and is a very flexible, template based content management system. Easy to learn, and loads of benefits, but for me, there were two main downsides:

* The first is all about experience. Why do I have to learn a new framework again when there is something similar fitting my needs based on the library I know? And developing with Hugo, I missed the powerful component based framework that React is.
* On top of that, the beauty of React is that you can easily build in flexible JavaScript snippets that give your site a modern look and feel. And as I'm not really a fan of the way CSS is structured, I can easily use Javascript based 2017 CSS solutions. More on that, later. 😻

###*Ok, fair enough, you want React and Static site generation, but why Gatsby, aren't there other solutions as well?*

Well indeed, there is [Next.js](https://zeit.co/blog/next4), and there is [Phenomic](https://phenomic.io/). I've created a website using the latter. I liked it, but it wasn't as flexible as I would've like it, and the framework was in an early phase. But they were still working on a 2.0 version when I chose to try out Gatsby. So I can't really comment on their latests version.

[Read more about the benefits of Gatsby and my road towards the creation of the blog](/setup-your-own-blog-site-in-no-time-with-gatsby).

## Blogging
Oh yeah, *excitement*, the last paragraph!🙌 I created my first blogposts in the back of my own car.🚗 Thanks to my wife, the driver I have time to do this. Currently still blogging in my Atom editor, in a markdown file. But most probably I will put this blog on [Netlify](http://netlify.com), and add the [Netlify CMS](https://www.netlifycms.org) to it. As it's a pretty straight forward mini CMS that does exactly what I need, but first, let's finish the above posts in detail.

[The ins and the outs of my blog](/the-blog)
