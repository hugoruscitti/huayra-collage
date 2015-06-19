import Ember from 'ember';

export default Ember.Controller.extend({

  disableBackSpace: function() {
    $(document).on("keydown", function (e) {
      if (e.which === 8 && !$(e.target).is("input, textarea")) {
          e.preventDefault();
      }
    });
  }.on('init')

});
