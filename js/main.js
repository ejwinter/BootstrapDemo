require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery-1.10.2',
    handlebars: 'lib/handlebars-1.1.2.js',
    lodash: 'lib/lodash.min.js',
    backbone: 'lib/backbone-min.js',
    bootstrap: '../bootstrap/js/bootstrap.min.js',
    site: 'main/site.js'
  },
  shim: {
    lodash: {
      exports: '_'
    },
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    }
  }
});

