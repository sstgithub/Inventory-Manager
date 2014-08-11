// For more information see: http://emberjs.com/guides/routing/

Basebox.TypeEditRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('type');
	},

	actions: {
		update: function(type) {
			type.save();
		}
	}
});
