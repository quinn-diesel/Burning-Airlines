var app = app || {};


app.Flights = Backbone.Collection.extend({

  url: '/flights',
  model: app.Flight,

  initialize: function(){

    this.on('add', function(flight){
      console.log('A new flight is added');
      // var flightView = new app.FlightView({
      //   model: flight
      // });
      // flightView.render();
    });


  }


});
