import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    removeItem(itemId) {
      this.get('removeItem')(itemId);
    },
    editItem(item) {
      this.get('editItem')(item);
    }
  }
});
