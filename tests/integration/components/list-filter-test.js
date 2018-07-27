import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import RSVP from 'rsvp';

moduleForComponent('list-filter', 'Integration | Component | filter listing', {
  integration: true
});

const ITEMS = [{brand: 'Mazda'}, {brand: 'BMW'}, {brand: 'Ford'}];
const FILTERED_ITEMS = [{brand: 'Mazda'}];

test('should initially load all listings', function (assert) {
  this.on('filterByBrand', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#list-filter filter=(action 'filterByBrand') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="brand">
          {{item.brand}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  return wait().then(() => {
    assert.equal(this.$('.brand').length, 3);
    assert.equal(this.$('.brand').first().text().trim(), 'Mazda');
  });
});

test('should update with matching listings', function (assert) {
  this.on('filterByBrand', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#list-filter filter=(action 'filterByBrand') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="brand">
          {{item.brand}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  this.$('.list-filter input').val('M').keyup();
  return wait().then(() => {
    assert.equal(this.$('.brand').length, 1);
    assert.equal(this.$('.brand').text().trim(), 'Mazda');
  });
});
