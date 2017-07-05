var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  el: "#SearchView",

  events: {
    'click button': "searchFlights"
  },

  searchFlights: function(){
    

  },

  render: function(){
    var rawTemplate = $('#SearchViewTemplate').html();
    this.$el.html(rawTemplate)
  }



});
