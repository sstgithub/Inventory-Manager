// For more information see: http://emberjs.com/guides/routing/

Basebox.TypesRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('type');
  }

});
