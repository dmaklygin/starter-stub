(function() {
  define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
      initialize: function() {
        return console.log('init model');
      }
    });
  });

}).call(this);
