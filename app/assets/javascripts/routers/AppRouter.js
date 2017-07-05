var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    'app': "initializeFlights",
    '': "initializeFlights",
    'app/:flight_id': "showFlight",
  },

  initializeFlights: function(){
    console.log("Navigated to default flight route");

    var appView = new app.AppView();
    appView.render();

  }

  showFlight: function(flignt_id){
    console.log("Navigated to flight detail route", flight_id);
  }


});
