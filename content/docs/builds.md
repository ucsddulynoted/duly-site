---
title: 'Building and Deploying'
date: 2024-09-09T13:37:52-07:00
type: 'docs'
draft: true
---

## Building

Use the `hugo` command to build the site. Hugo will write the built site to the
`public` directory.

Use `hugo server` to build the site and start a local web server you can use
to preview the site. Add the `D` flag to include content marked as draft.

## Deploying

Once you have built the site, run the following command

```
scp -r public dulynote@acsweb.ucsd.edu:dulynote/public_html
```
