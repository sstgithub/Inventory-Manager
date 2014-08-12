// For more information see: http://emberjs.com/guides/routing/

Basebox.TypesNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('type');
	},

	// actions: {
	// 	create: function(type) {
	// 		var route = this;

	// 		type.save().then(function() {
	// 			alert('saved')
	// 			route.transitionTo('types');
	// 		});
	// 	}
	// }

	actions: {
		create: function() {
			var newType = this.get('currentModel');
			var self = this;
			newType.save().then(
				function() {self.transitionTo('types') },
				function() { }
			);
		}
	}
});