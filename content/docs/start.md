---
title: 'Getting Started'
date: 2024-09-09T17:22:25-07:00
type: 'docs'
draft: true
---

## Prerequisites

These are things you should be familiar with if you want to edit the website:

- Git and GitHub
- Hugo
- HTML, CSS, Javascript
- Dart Sass
- YAML
- SSH and SCP

## Installation and Setup

Follow the steps below to set up a development environment.

1. Follow the Hugo and Dart Sass installation for your OS: <https://gohugo.io/installation/>

2. Clone this repository

```
git clone https://github.com/ucsddulynoted/duly-site
```

3. Get hugo module

```
hugo mod get -u
```

4. Run server

```
hugo server -D
```

### Build Setup

In order to build the site, PostCSS will need to be installed as well.

1. Install [Node.js](https://nodejs.org/en/download)

2. Install the required Node.js pacakges:

```
npm i -D postcss postcss-cli autoprefixer
```
