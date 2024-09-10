---
title: 'Repository Structure'
date: 2024-09-09T13:38:20-07:00
type: 'docs'
draft: true
---

The site utilizes the Hugo structure: <https://gohugo.io/getting-started/directory-structure/>


### archetypes

The `archetypes` directory contains templates for new content. See [details](https://gohugo.io/content-management/archetypes/)

### assets

The `assets` directory contains site Sass that are typicall processed through an asset pipeline. It is based off of <https://gist.github.com/AdamMarsden/7b85e8d5bdb5bef969a0>

###### base

The `base` directory contains typographic rules and standard styles for the site.

###### components

The `components` directory contains layouts for smaller page elements.

###### layout

The `layout` directory contains styles for main parts of the site.

###### pages

The `pages` directory contains styles specific to each page.

###### utils

The `utils` directory contains common tools and variables.

### content

The `content` directory contains the markup files for the site content.

###### docs

The `docs` directory contains the markup files for site documentation.

### layouts

The `layouts` directory contains templates to help transform content, data, and resources into pages.

###### pages

The `pages` directory contains the layout of main pages.

###### partials

The `partials` directory contains templates for common HTML elements.

###### shortcodes

The `shortcodes` directory contains structure for HTML elements that can be used in `content`.

### public

The `public` directory contains the published website generated when `hugo` or `hugo server` is run.

### resources

The `resources` directory contains cached output from Hugo's asset piplines.

### static

The `static` directory contains files that will be copied to the public directory when built.
