var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': "initializeFlights"
  },

  initializeFlights: function(){
    console.log("Navigated to default flight route");

    var appView = new app.AppView();
    appView.render();

  }


});
