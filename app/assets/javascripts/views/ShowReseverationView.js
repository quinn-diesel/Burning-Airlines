var app = app || {};

app.ShowReversationView = Backbone.View.extend({
  el: '#app',

  render: function (){

    var rawTemplate = $('#ShowReversationView').html();
    var template = _.template( rawTemplate );
    var markup = template(this.model.attributes);


  }


});
