import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editItem(item) {
      this.get('editItem')(item);
    }
  }
});
