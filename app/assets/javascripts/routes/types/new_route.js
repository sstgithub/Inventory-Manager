// For more information see: http://emberjs.com/guides/routing/

Basebox.TypesNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('type');
	},

	actions: {
		create: function(type) {
			type.save();
			this.transitionTo('types');
		}
	}
});