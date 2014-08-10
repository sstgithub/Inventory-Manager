// for more details see: http://emberjs.com/guides/models/defining-models/

Basebox.Type = DS.Model.extend({
  typeName: DS.attr('string'),
  metalName: DS.attr('string'),
  quantity: DS.attr('number')
});
