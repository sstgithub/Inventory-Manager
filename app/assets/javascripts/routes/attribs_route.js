// For more information see: http://emberjs.com/guides/routing/

Basebox.AttribsRoute = Ember.Route.extend({

	model: function() {
    this.store.find('attrib');

    return this.store.filter('attrib', function(attrib) {
    	return !attrib.get('isNew');
    });
  },

  actions: {
  	"delete": function(attrib) {
  		attrib.destroyRecord();
  	}
  }

});
