(function() {
  define(['backbone', 'models/user'], function(Backbone, User) {
    return Backbone.Collection.extend({
      model: User
    });
  });

}).call(this);
