// For more information see: http://emberjs.com/guides/routing/

EmberjsAdelaide.Router.map(function() {
  this.resource('presentations', { path: "/" }, function () {
    this.resource('presentation', { path: '/:presentation_id' });
  });
});
