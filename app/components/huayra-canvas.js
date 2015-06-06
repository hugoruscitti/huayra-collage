import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['huayra-canvas'],
  width: 100,
  height: 100,
  canvas: Ember.inject.service(),

  createCanvas: function() {
    this.get('canvas').create(this.get('width'), this.get('height'));
  }.on('didInsertElement')
  
});
