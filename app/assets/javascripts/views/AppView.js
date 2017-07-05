var app = app || {};


app.AppView = Backbone.View.extend({
  el: "#app",


  render: function(){

    var rawTemplate = $('#AppViewTemplate').html();
    this.$el.html(rawTemplate);
    console.log("AppViewTemplate rendered");

    var searchFlightView = new app.SearchFlightView();
    searchFlightView.render();

  }


});
