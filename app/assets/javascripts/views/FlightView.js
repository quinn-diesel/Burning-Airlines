var app = app || {};

app.FlightView = Backbone.View.extend({

  tagName: 'tr',

  render: function(){

    // old function that is just getting ID
    // var flightID = this.model.get('id');
    // this.$el.html(flightID);
    // this.$el.appendTo('#flights');

    var rawTemplate = $('#FlightViewTemplate').html();
    var template = _.template( rawTemplate );
    var markup = template(this.model.attributes);

    this.$el.html( markup ).appendTo('#flights');
  }

});
