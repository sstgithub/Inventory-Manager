Basebox.AttribsNewRoute = Ember.Route.extend({
	model: function() {
		// typeId.set('type', id)
		return this.store.createRecord('attrib'); //{typeId: 3}
	},

	actions: {
		create: function() {
			var newAttrib = this.get('currentModel');
			var self = this;
			// var attribs = type.get('attribs');
			// attribs.pushObject(newAttrib);
			// this.get('typeRoute');

			// type.get('attribs').pushObject(newAttrib);
			newAttrib.save().then(
				function() {self.transitionTo('attribs') },
				function() { }
			);
		}
	}
});
