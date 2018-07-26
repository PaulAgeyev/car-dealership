import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByBrand(param) {
      if (param !== '') {
        return this.get('store').query('car', { brand: param });
      } else {
        return this.get('store').findAll('car');
      }
    }
  }
});
