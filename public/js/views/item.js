(function() {
  define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
      initialize: function() {
        return console.log('Init Item');
      }
    });
  });

}).call(this);
