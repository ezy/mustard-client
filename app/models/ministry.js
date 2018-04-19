import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  body: DS.attr('string'),

  churches: DS.belongsTo('churches')
});
