// For more information see: http://emberjs.com/guides/routing/

Basebox.StoriesNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('story');
	}
});
