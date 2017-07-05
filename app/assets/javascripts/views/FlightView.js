var app = app || {};

app.FlightView = Backbone.View.extend({

  tagName: 'li',

  render: function(){
    var flightID = this.model.get('id');
    this.$el.html(flightID);
    this.$el.appendTo('#flights');
  }


});
