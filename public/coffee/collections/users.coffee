define ['backbone', 'models/user'], (Backbone, User) ->
  Backbone.Collection.extend
    model: User