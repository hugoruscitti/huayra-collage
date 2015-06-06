import Ember from 'ember';

export default Ember.Service.extend({
  canvas: null,

  create: function(width, height) {
    var canvas = new fabric.Canvas('canvas');

    canvas.setWidth(width);
    canvas.setHeight(height);
    canvas.renderAll();

    this.set('canvas', canvas);
    
    this.createRectangle();
  },

  createRectangle: function() {
    var canvas = this.get('canvas');

    var rect = new fabric.Rect({
      top : 10,
      left : 10,
      width : 60,
      height : 70,
      fill : 'red'
    });

    canvas.add(rect);
    canvas.renderAll();
  }


});
