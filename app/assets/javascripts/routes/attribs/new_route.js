Basebox.AttribsNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('attrib');
	},

	actions: {
		create: function() {
			var newAttrib = this.get('currentModel');
			var self = this;
			newAttrib.save().then(
				function() {self.transitionTo('attribs') },
				function() { }
			);
		}
	}
});