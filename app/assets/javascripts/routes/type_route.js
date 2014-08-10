// For more information see: http://emberjs.com/guides/routing/

Basebox.TypeRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('type', params.type_id);
	}
});
