Basebox.AttribEditRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('attrib');
	},

	actions: {
		update: function() {
			var editAttrib = this.get('currentModel');
			var self = this;
			editAttrib.save().then(
				function() {self.transitionTo('attrib') },
				function() { }
			);
		}
	}
});