// For more information see: http://emberjs.com/guides/routing/

Basebox.Router.map(function() {
  this.resource('types');
  this.resource('type', { path: '/types/:type_id' });
});
