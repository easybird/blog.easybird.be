---
title: "Styling my blog with Glamorous"
cover: "https://cdn-images-1.medium.com/max/2000/1*2T1APtMXBQI5Ux_Fk2ybRQ.png"
date: "12/11/2017 8:30 +0100"
category: "hands-on software"
tags:
    - programming
    - tutorial
    - styling
    - gatsby
    - tutorial
---

## TLDR
Let's style this blog, using the css-in-js based library, [Glamorous](https://github.com/paypal/glamorous) .💄

## The benefits
I got convinced by reading [the article by Kent C. Dodds on Medium](https://blog.kentcdodds.com/introducing-glamorous-fb3c9f4ed20e), one of the creators of this library.
In short: there are multiple css-in-js based libraries, but the benefits of this one are that, next to the benefits of css-in-js (which [can be found here](https://speakerdeck.com/vjeux/react-css-in-js)), you can still use the benefits of css specific stuff like

* pseudoclasses
* child-selectors
* media queries
* animations
* global theming
* and easily add grid support if you'd want

## Let's get started
Check out the power of the library by checking [this page](https://glamorous.rocks/getting-started/).

To follow along what we did to add glamorous, just check the steps below.

Again, if we're talking code, you can 'check out' the [git tag](https://github.com/easybird/blog.easybird.be/releases/tag/styling-with-glamorous) related to the implementation of the styling.

### Add dependencies

First add gatsby-plugin-typography and gatsby-plugin-glamor to `package.json` and `gatsby-config.js`.

#### gatsby-plugin-typography
The typography plugin is an easy way to add basic typography styling to your blog.
Just follow along [here](https://kyleamathews.github.io/typography.js/) to add this to your project.
We've added the Lincoln theme to the project. 

#### gatsby-plugin-glamor
Glamorous is based on glamor, so that's why we need to add the glamor plugin as well.

#### Add the glamorous dependency
Add glamorous to `package.json`
