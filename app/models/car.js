import DS from 'ember-data';

export default DS.Model.extend({
  brand:  DS.attr(),
  model:  DS.attr(),
  engine:  DS.attr(),
  power:  DS.attr(),
  doors:  DS.attr(),
  colors:  DS.attr(),
  drive_wheel:  DS.attr(),
  category: DS.attr(),
  price: DS.attr(),
  quantity: DS.attr(),
  city:  DS.attr(),
  address:  DS.attr(),
  image:  DS.attr(),
  description:  DS.attr(),
});
