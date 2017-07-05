var app = app || {};


app.AppView = Backbone.View.extend({
  el: "#app",

  events: {
    "click tr": "gotoFlightDetail"
  },

  gotoFlightDetail: function(event){
    // var flight_id = this.model.get('id');
    var flight_id = 23;
    // console.log(event);
    // console.log(flight_id);
    // console.log(flight_id);
    console.log(event);
    app.router.navigate( "flights/" + flight_id, true );
    // console.log(event);
  },

  render: function(){

    var rawTemplate = $('#AppViewTemplate').html();
    this.$el.html(rawTemplate);
    console.log("AppViewTemplate rendered");

    var searchFlightView = new app.SearchFlightView();
    searchFlightView.render();

  }


});
