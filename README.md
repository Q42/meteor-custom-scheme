# Custom Scheme
__A wrapper for the Cordova Custom-URL-scheme plugin by EddyVerbruggen__

[![Build Status][travis-image]][travis-url]

## Getting started

Add the package to meteor
```
meteor add q42:custom-scheme
```

## Basic usage

### Mobile Config
You will need to specify your url scheme in your __mobile-config.js__.

```JavaScript
App.configurePlugin('cordova-plugin-customurlscheme', {
  URL_SCHEME: [Your URL scheme here]
});
```

[travis-url]: https://travis-ci.org/Q42/meteor-custom-scheme
[travis-image]: http://img.shields.io/travis/Q42/meteor-custom-scheme.svg
