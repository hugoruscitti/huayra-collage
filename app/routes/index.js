import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToEditor: function() {
      this.transitionTo("editor");
    }
  }
});
