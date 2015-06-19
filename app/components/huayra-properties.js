import Ember from 'ember';

export default Ember.Component.extend({
  canvas: Ember.inject.service(),

  hasSelected: false,
  selectedObject: null,
  isText: false,

  connectToCanvas: function() {
    this.get('canvas').connectEvents(this);
  }.on('init'),

  onSelected(event) {
    this.set('hasSelected', true);

    if (event.target._objects) {
      console.log("Es seleccion");
    } else {
      console.log("Es objeto");
    }

    this.set('selectedObject', this.get('canvas').getSelection());
    this.set('isText', (this.get('selectedObject').text !== undefined));
  },

  onSelectionCleared(event) {
    this.set('hasSelected', false);
    this.set('selectedObject', null);
  },

  text: function() {
    if (!this.get('selectedObject'))
      return "";

    return this.get('selectedObject').text;
  }.property('hasSelected'),


  cambia: function() {
    if (!this.get('selectedObject'))
      return;

    this.get('selectedObject').text = this.get('text');
    this.get('canvas').redraw();
  }.observes('text'),

});
