import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItem() {
      const item = {
        id: this.get('id'),
        brand: this.get('brand'),
        model: this.get('model'),
        engine: this.get('engine'),
        power: this.get('power'),
        doors: this.get('doors'),
        colors: this.get('colors'),
        drive_wheel: this.get('drive_wheel'),
        category: this.get('category'),
        price: this.get('price'),
        quantity: this.get('quantity'),
        city: this.get('city'),
        address: this.get('address'),
        image: this.get('image'),
        description: this.get('description'),
      };
      this.get('addItem')(item);
    }
  }
});
