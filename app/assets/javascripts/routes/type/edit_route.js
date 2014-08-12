// For more information see: http://emberjs.com/guides/routing/

Basebox.TypeEditRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('type');
	},

	// actions: {
	// 	update: function(type) {
	// 		var route = this;

	// 		type.save().then(function() {
	// 			route.transitionTo('type');
	// 		})
	// 	}
	// }

	actions: {
		update: function() {
			var editType = this.get('currentModel');
			var self = this;
			editType.save().then(
				function() {self.transitionTo('type') },
				function() { }
			);
		}
	}
});
