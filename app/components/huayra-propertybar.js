import Ember from 'ember';

export default Ember.Component.extend({
  canvas: Ember.inject.service(),
  show: false,

  actions: {
    createRectangle: function() {
      this.get('canvas').createRectangle();
    },

    createOval: function() {
      this.get('canvas').createOval();
    },

    createText: function() {
      this.get('canvas').createText();
    },
  }
});
