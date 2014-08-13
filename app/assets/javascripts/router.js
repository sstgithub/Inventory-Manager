// For more information see: http://emberjs.com/guides/routing/

Basebox.Router.map(function() {
//   this.resource('types', function() {
//   	this.resource('type', { path: ':type_id' }, function() {
//   		this.route('edit');
//   	});
//   	this.route('new');
//   });

//   this.resource('attribs');
// });

	this.resource('types', function() {
  	this.resource('type', { path: ':type_id' }, function() {
  		this.route('edit');
  		this.resource('attribs', function() {
  			this.resource('attrib', { path: ':attrib_id' }, function() {
  				this.route('edit');
  			});
  		this.route('new');
  		});
  	});
  	this.route('new');
  });

  // this.resource('attribs');
});