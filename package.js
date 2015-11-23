Package.describe({
  name: 'q42:custom-scheme',
  version: '0.1.2',
  summary: 'A wrapper for the Cordova Custom-URL-scheme plugin by EddyVerbruggen',
  git: 'https://github.com/Q42/meteor-custom-scheme',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "cordova-plugin-customurlscheme": "4.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(
    'client/event.js',
    'client');
  api.use('webapp', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ecmascript');
  api.use('q42:custom-scheme');
  // Tests will follow soon!
  api.addFiles(
    'test/client/event.test.js'
  );
});