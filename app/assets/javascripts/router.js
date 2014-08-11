// For more information see: http://emberjs.com/guides/routing/

Basebox.Router.map(function() {
  this.resource('types', function() {
  	this.resource('type', { path: ':type_id' });
  	this.route('new');
  });
});
