import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['huayra-canvas'],
  width: 100,
  height: 100,

  createCanvas: function() {
    var canvas = new fabric.Canvas('canvas');

    var rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 60,
      height : 70,
      fill : 'red'
    });

    canvas.setWidth(this.get("width"));
    canvas.setHeight(this.get("height"));
    canvas.renderAll();

    canvas.add(rect);

  }.on('didInsertElement')
});
