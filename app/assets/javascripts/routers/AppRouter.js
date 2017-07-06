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
    console.log("Navigated to flight detail route", flight_id);

    var flight = app.flights.get(flight_id);

    console.log('flight:', flight);

    var flightDetailView = new app.FlightDetailView({model:flight});
    flightDetailView.render();
  },

  showReservation: function (){
    console.log("Navigated to the reservation page");
  }


});
