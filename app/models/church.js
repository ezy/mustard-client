import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  zip: DS.attr('string'),
  longitude: DS.attr('string'),
  latitude: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  facebook: DS.attr('string'),
  serviceDay: DS.attr('string'),
  serviceTimes: DS.attr('string'),

  users: DS.hasMany('user'),
  churches: DS.belongsTo('churches')
});
