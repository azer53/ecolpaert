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

**Install _gatsby-plugin-netlify-cms_**

**Link website via Netlify CLI tools, with auto detection included via GitHub**

**Add a `config.yml `file**

```
backend:  name: git-gateway  branch: master
```



****
