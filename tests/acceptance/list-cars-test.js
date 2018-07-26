import { test } from 'qunit';
import moduleForAcceptance from 'car-dealership/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list cars');

test('should redirect to cars route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/cars', 'should redirect automatically');
  });
});

test('should list available cars.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should filter the list of cars by brand.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'mazda');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .location:contains("Mazda")').length, 1, 'should contain 1 listing with brand Mazda');
  });
});

test('should show details for a specific car', function (assert) {
  visit('/cars');
  click('a:contains("Mazda RX-8")');
  andThen(function() {
    assert.equal(currentURL(), '/cars/mazda-rx8', 'should navigate to show route');
    assert.equal(find('.show-listing h2').text(), "Mazda RX-8", 'should list car title');
    assert.equal(find('.description').length, 1, 'should list a description of the property');
  });
});