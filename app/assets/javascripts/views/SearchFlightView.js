var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  el: "#SearchView",

  events: {
    'click button': "searchFlights"
  },

  searchFlights: function(){
    
    var $fromInput = $("#from").val();
    var $toInput = $("#to").val();
    console.log("Filter flights from: ", $fromInput, $toInput);

    var results = _.filter(app.flights.models, function(flight){
      return flight.get('from') === $fromInput && flight.get('to') === $toInput;
    })

    console.log("Filtered resutls: " , results);

    _.each(results, function(flight){
      var searchView = new app.SearchView({model:flight});
      searchView.render();
    });

    $("#flights").hide();
    $("#searchFlights").show();

  },

  render: function(){
    var rawTemplate = $('#SearchViewTemplate').html();
    this.$el.html(rawTemplate)
  }



});
