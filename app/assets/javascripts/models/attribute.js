// for more details see: http://emberjs.com/guides/models/defining-models/

Basebox.Attrib = DS.Model.extend({
  type: DS.belongsTo('type'),
  attrName: DS.attr('string'),
  attrValue: DS.attr('string'),
  attrReq: DS.attr('boolean')
});
