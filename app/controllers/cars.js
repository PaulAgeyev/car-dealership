import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByBrand(param) {
      if (param !== '') {
        return this.get('store').query('car', {brand: param});
      } else {
        return this.get('store').findAll('car');
      }
    },
    submit() {
      let car = this.get('store').createRecord('car', {
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
      });
      car.save();
    },
    removeItem(itemId) {
      this.get('store').findRecord('car', itemId, {backgroundReload: false}).then(function (car) {
        car.destroyRecord();
      });
    },
    editItem(item) {
      console.log(item.get('brand'));
      this.get('store').findRecord('car', item.id).then(function(car) {
        car.set('brand', item.get('brand'));
        car.set('model', item.get('model'));
        car.set('engine', item.get('engine'));
        car.set('power', item.get('power'));
        car.set('doors', item.get('doors'));
        car.set('colors', item.get('colors'));
        car.set('drive_wheel',item.get('drive_wheel'));
        car.set('category', item.get('category'));
        car.set('price', item.get('price'));
        car.set('quantity', item.get('quantity'));
        car.set('city', item.get('city'));
        car.set('address', item.get('address'));
        car.set('image', item.get('image'));
        car.set('description', item.get('description'));
        car.save();
      });
    }
  }
});
