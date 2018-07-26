import Ember from 'ember';

export function carTitleType(params/*, hash*/) {
  return params.join(' ');
}

export default Ember.Helper.helper(carTitleType);
