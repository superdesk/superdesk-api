# Superdesk API Documentation

[![Build Status](https://travis-ci.org/petrjasek/superdesk-api.svg?branch=master)](https://travis-ci.org/petrjasek/superdesk-api)

## Render the api

You can use `aglio` to render the api with the default template:

    $ ./node_modules/aglio/bin/aglio.js -i apiary.apib -o out.html


For the olio template you can tkae the following steps:

    $ npm install aglio-theme-onlicar

    $ ./node_modules/aglio/bin/aglio.js --theme-full-width -i apiary.apib --theme-template triple -o out.html


You can use `protagonist` to test that the api has valid json:

    $ node test.js
