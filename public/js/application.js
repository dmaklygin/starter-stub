(function() {
  define(['backbone'], function(Backbone) {
    window.App = new Backbone.View.extend({
      name: 'Stub',
      settings: {},
      getSettings: function() {
        return this.settings;
      }
    });
    return window.App;
  });

}).call(this);
