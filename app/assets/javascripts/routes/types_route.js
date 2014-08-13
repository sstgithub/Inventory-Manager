// For more information see: http://emberjs.com/guides/routing/

Basebox.TypesRoute = Ember.Route.extend({

  model: function() {
    this.store.find('type');

    // disables databinding before user actually adds the new value
    return this.store.filter('type', function(type) {
    	return !type.get('isNew');
    });
  },

  actions: {
  	"delete": function(type) {
  		type.destroyRecord();
  	}
  }

});
