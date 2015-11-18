# Custom Scheme
__A wrapper for the Cordova [Custom-URL-scheme plugin](https://github.com/EddyVerbruggen/Custom-URL-scheme) by EddyVerbruggen__

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

### Listen for an URL
When the app is opened using the custom url scheme, the Meteor.onCustomScheme(callback) function is called.
You can use this as an event to easily subscribe to, and to create your own logic for when this happens.

```JavaScript
Meteor.onCustomScheme(function(url){
  // Use the url here
});
```

[travis-url]: https://travis-ci.org/Q42/meteor-custom-scheme
[travis-image]: http://img.shields.io/travis/Q42/meteor-custom-scheme.svg
