var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '/app': "initializeFlights",
    '': "initializeFlights"
  },

  initializeFlights: function(){
    console.log("Navigated to default flight route");

    var appView = new app.AppView();
    appView.render();

  }


});
