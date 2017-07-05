var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  el: "#SearchView",

  events: {
    'click button': "searchFlights"
  },

  searchFlights: function(){
    var $fromInput = $("#from").val();
    console.log("Filter flights from: " + $fromInput);

    var results = _.filter(app.flights.models, function(flight){
      return flight.get('from') === $fromInput;
    })

    console.log("Filtered resutls: " , results);


  },

  render: function(){
    var rawTemplate = $('#SearchViewTemplate').html();
    this.$el.html(rawTemplate)
  }



});
