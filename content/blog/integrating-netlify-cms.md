---
templateKey: blog-post
date: 2019-05-08T12:59:30.657Z
title: Integrating Netlify CMS
tags:
  - Netlify
  - CMS
---
## The goal

Setting up a Gatsby blog based on a starter template was the easy part. Next up, I wanted to include Netlify CMS. Why?

* Create blog posts via a UI tool with a rich text editor included
* Editorial workflow, more on this later
* Different Auth providers like GitHub and Google

## The journey

Below you'll find an overview of the steps taken to install the Netlify CMS. You can also browse to the source files on Github: <https://github.com/azer53/ecolpaert>

* Install _gatsby-plugin-netlify-cms_
* Link website via Netlify CLI tools, with auto detection included via GitHub
* Add a `config.yml`file


```
backend:  name: git-gateway  branch: master
```

## Current issues

* Live preview is not displaying the proper view, a customisation needed to be made to `cms.js`, unfortunately I didn't get this too work. Still under investigation. 
* Images not being found on the live environment. Added a file `_headers`  to support finding the correct folder where images are stored, but this seemed to be not sufficient.

## Result

The editorial workflow is setup. This is depending on your Git workflow. For every blog-post written via the UI-tool a pull request is created. Which means that this written content goes directly to a separate branch and is stored even before it is published. After writing a draft the post can go through a visual approval flow for publishing it. Under the hood, this means approving a pull request for the created branch and merging it back into your master branch. Very impressed by this feature!

An additional benefit to the Git driven approach is that I also can pull my content from live website in my local development environment.
