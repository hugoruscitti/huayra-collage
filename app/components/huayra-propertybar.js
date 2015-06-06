import Ember from 'ember';

export default Ember.Component.extend({
  canvas: Ember.inject.service(),
  show: false,

  actions: {
    createRectangle: function() {
      this.get('canvas').createRectangle();
    }
  }
});
