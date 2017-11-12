---
title: "Setup your own blog in no time with Gatsby"
cover: "/blog/GatsbyJS.png"
date: "05/11/2017 9:30 +0100"
category: "hands-on software"
tags:
    - programming
    - tutorial
    - blogging
    - gatsby
    - tutorial
---

## TLDR
Let's create a basic blog with Gatsby and deploy it on [Netlify](https://netlify.com) via a custom domain.🤠

## Steps to setting up this Gatsby blog

### Install the Gatsby cli
```bash
npm install --global gatsby-cli
```

### Create an initial Gatsby site with one of it's [starters](https://www.gatsbyjs.org/docs/gatsby-starters/)
I've used the [`gatsby-starter-advanced`](https://github.com/Vagr9K/gatsby-advanced-starter) which doesn't contain any styling (I'd like to implement that myself), but contains some setup stuff out of the box, like

* Blog posts in Markdown
* Google Analytics
* Disqus support
* Tags and categories bundling for my blog
* Offline support (🤠yay service workers!😻)
* and loads of others..

In fact, I could as well start from the most clean version, as most of those things are extremely easy to add with Gatsby as they are just imported via an npm module as a Gatsby Plugin.

> Personal note: Using a starter always feels like a double edged sword..it gets you started quite easy..but most of the time you don't need everything and you can get lost and overwhelmed by the unnecessary stuff..

Mosts probably I won't need them all..and maybe later on I will clean up what I don't need..but for now, it get's me started quite easy with some nice features out of the box.

```bash
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-advanced-starter
npm run dev
```

And yay, go to [http://localhost:8000](http://localhost:8000), and we have our basic blog! Go to the SiteConfig.js file and change the config to your needs.

#### What did I change to start with?
I started by changing the *PostListing.jsx* file, just because of two things:

* I wanted the date to be displayed in a clean way in the post listing. This means, when the article is written a day ago, I don't want the date to be displayed just like that, but I want: 'A day ago'. Therefore I wrote some dateHelper functions which will help me do this throughout the blog:

```jsx
// dateHelper.js
import moment from "moment";

const DEFAULT_DATE_FORMAT = "DD/MM/YYYY HH:mm Z";
const DEFAULT_DISPLAY_DATE = "DD/MM/YYYY";

export const parseDate = (dateAsString, dateFormat) =>
  moment(dateAsString, dateFormat || DEFAULT_DATE_FORMAT);

export const formatDate = (dateAsMoment, displayDate) => {
  const duration = moment.duration(dateAsMoment.diff(moment()));
  if (duration.asHours() > -49) {
    return duration.humanize(true);
  }
  return dateAsMoment.format(displayDate || DEFAULT_DISPLAY_DATE);
};
```

* And I wanted the articles to be sorted by date:

```jsx
// PostListing.jsx
import React from "react";
import Link from "gatsby-link";
import { formatDate, parseDate } from "../../helpers/dateHelper";

class PostListing extends React.Component {
  getPostList() {
    return this.props.postEdges
      .map(postEdge => ({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: parseDate(postEdge.node.frontmatter.date),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      }))
      .sort((a, b) => a.date < b.date);
  }

  render() {
    const postList = this.getPostList();

    return (
      <div>
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <h1>{`${formatDate(post.date)} - ${post.title}`}</h1>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
```


## Publish the blog to the web
For this I'm using [Netlify](https://netlify.com).

First, clone the project with git, to [Github](https://github.com):
```bash
git init
git add --all
git commit -m 'initial commit'
git remote add origin https://github.com/YOUR_GITHUB_NAME/YOUR_GITHUB_REPO_NAME.git
git push -u origin master
```

And then create a login on [Netlify.com](https://netlify.com) and add the correct build settings, which can be seen below.
Then trigger a deploy, and a few seconds later, your blog is live on a "random" url given to you by Netlify!

![netlify build settings][netlifyBuildSettingsImage]

[netlifyBuildSettingsImage]: /blog/netlify-deploy-settings.jpeg "Netlify build settings"

## Publish to a custom domain
[Netlify.com](https://netlify.com) also makes it extremely easy to deploy to a custom domain.
Follow their steps, and in five minutes you could be live on your own domain.

## Add https, all for free
And following their steps, 2 minutes later, you could even have a Https-enabled website!👍

## All live, up to the next steps.
Here you go, we are live on [easyblog.be](https://easyblog.be).

Follow along my code on [Github](https://github.com/easybird/blog.easybird.be). I made a special tag with the code up until this point.

![live website without css][siteWithoutCss]

[siteWithoutCss]: /blog/live-site-without-css.jpeg "Live blog on Easyblog.be without styling"

But nah...this looks *shitty* without styling, let's [add styling](/styling-my-blog-with-glamourous) in the next step!
