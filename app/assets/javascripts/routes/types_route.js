// For more information see: http://emberjs.com/guides/routing/

Basebox.TypesRoute = Ember.Route.extend({

  model: function() {
    return this.store.find('type');

    // return this.store.filter('type', function(type) {
    // 	return !type.get('isNew');
    // });
  },

  actions: {
  	"delete": function(type) {
  		type.destroyRecord();
  	}
  }

});
