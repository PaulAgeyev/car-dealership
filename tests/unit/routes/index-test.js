import {moduleFor, test} from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to cars route', function (assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'cars', 'replace with route name cars');
    }
  });
  route.beforeModel();
});
