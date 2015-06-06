import Ember from 'ember';

export default Ember.Controller.extend({
  width: 300,
  height: 300,
  newWidth: 300,
  newHeight: 300,
  queryParams: ['showPropertyBar', 'tab_idx'],
  tab_idx: 0,

  showPropertyBar: false,

  actions: {
    togglePropertyBar: function() {
      this.toggleProperty('showPropertyBar');
    }
  }

});
