// for more details see: http://emberjs.com/guides/models/defining-models/

EmberjsAdelaide.Presentation = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string')
});
