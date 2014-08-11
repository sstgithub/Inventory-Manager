// For more information see: http://emberjs.com/guides/routing/

Basebox.TypesRoute = Ember.Route.extend({

  model: function() {
    this.store.find('type');

    return this.store.filter('type', function(type) {
    	return !type.get('isNew');
    });
  }

});
