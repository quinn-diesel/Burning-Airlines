var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': "initializeFlights",
    'flights': "initializeFlights",
    'flights/:flight_id': "showFlight",
    'reservations': 'showReservation',
  },

  initializeFlights: function(){
    console.log("Navigated to default flight route");

    var appView = new app.AppView();
    appView.render();

  },

  showFlight: function(flight_id){
    var appView = new app.AppView();
    appView.render();

    console.log("Navigated to flight detail route", flight_id);

    $('#SearchView').hide();
    $('#searchFlights').hide();


    var flight = app.flights.get(flight_id);
    console.log('Current flight id:', flight_id);

    app.flights.fetch().done(function(){

      var flightDetailView = new app.FlightDetailView({model:flight});
      flightDetailView.render();

    });
  }, // end of showFlight


  showReservation: function (){
    var appView = new app.AppView();
    appView.render();

    $('#SearchView').hide();
    $('#flightDetail').hide();
    $('#reservations').show();

    console.log("Navigated to the reservation route");

    app.reservations.fetch().done(function(){

      _.each(app.reservations.models, function( res ){

        var rv = new app.ShowReservationView(
          {model:res}
        );
        rv.render();
      });

    });
  }, // end of showReservation


});
