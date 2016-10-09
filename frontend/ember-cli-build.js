/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  // Bootstrap
  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot', { destDir: 'assets' });
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg', { destDir: 'assets' });
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf', { destDir: 'assets' });
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', { destDir: 'assets' });
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2', { destDir: 'assets' });

   // FontAwesome
  app.import('bower_components/font-awesome/css/font-awesome.css');
  app.import('bower_components/font-awesome/css/font-awesome.css.map');

  var fontawesome = new Funnel('bower_components/font-awesome/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });

  return app.toTree(fontawesome);
};
