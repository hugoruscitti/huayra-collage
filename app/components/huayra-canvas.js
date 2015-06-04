import Ember from 'ember';

export default Ember.Component.extend({
  createCanvas: function() {
    var canvas = new fabric.Canvas('canvas');

    var rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 60,
      height : 70,
      fill : 'red'
    });

    canvas.add(rect);

  }.on('didInsertElement')
});
