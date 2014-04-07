(function() {
  require.config({
    deps: [
      'requirejs'
    ],
    baseUrl: 'public/js',
    paths: {
      backbone: '../libs/backbone/backbone',
      jquery: '../libs/jquery/dist/jquery',
      requirejs: '../libs/requirejs/require',
      underscore: '../libs/underscore/underscore'
    }
  });

  require(['application'], function(App) {
    return console.log('load appliction', App);
  });

}).call(this);
