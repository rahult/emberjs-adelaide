// For more information see: http://emberjs.com/guides/routing/

EmberjsAdelaide.PresentationsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('presentation');
  }
});
