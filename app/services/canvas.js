import Ember from 'ember';

export default Ember.Service.extend({
  canvas: null,
  eventListener: null,

  create: function(width, height) {
    var canvas = new fabric.Canvas('canvas');

    canvas.setWidth(width);
    canvas.setHeight(height);
    canvas.renderAll();

    canvas.on('object:selected', this.onSelected.bind(this));
    canvas.on('selection:cleared', this.onSelectionCleared.bind(this));

    this.set('canvas', canvas);
  },

  /*
   * Conecta a un objeto para ser notificado de los cambios de selección en
   * el canvas.
   *
   * El objeto conectado aquí tiene que entender los métodos "onSelected" y
   * "onSelectionCleared".
   */
  connectEvents(target) {
    this.set('eventListener', target);
  },

  onSelected(event) {
    console.log(event);

    if (this.get('eventListener')) {
      this.get('eventListener').onSelected(event);
    }

  },

  onSelectionCleared(event) {
    if (this.get('eventListener')) {
      this.get('eventListener').onSelectionCleared(event);
    }
  },


  getSelection() {
    var canvas = this.get('canvas');
    return canvas.getActiveObject();
  },


  /*
   * Métodos de creación de objetos
   */
  createRectangle: function() {
    var canvas = this.get('canvas');

    var rect = new fabric.Rect({
      top: 10,
      left: 10,
      width: 60,
      height: 70,
      fill: 'red'
    });

    canvas.add(rect);
    canvas.renderAll();
  },

  createOval: function() {
    var canvas = this.get('canvas');

    var circle = new fabric.Circle({
      top: 10,
      left: 10,
      radius: 75,
      fill: 'blue'
    });

    canvas.add(circle);
    canvas.renderAll();
  },

  createText: function() {
    var canvas = this.get('canvas');
    var text = 'Text de ejemplo';

    var texto = new fabric.Text(text, {
      left: 10,
      top: 10,
      fontFamily: 'helvetica',
      angle: 0,
      fill: 'black',
      scaleX: 1,
      scaleY: 1,
      fontWeight: '',
      originX: 'left',
      hasRotatingPoint: true,
      centerTransform: true
    });

    canvas.add(texto);
  },

  redraw() {
    this.get('canvas').renderAll();
  }

});
