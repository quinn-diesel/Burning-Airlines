var app = app || {};


app.FlightDetailView = Backbone.View.extend({

  el: "#app",

  render: function(){

    var rawTemplate = $('#FlightDetailViewTemplate').html();
    var template = _.template(rawTemplate);
    var markup = template(this.model.attributes);




    var rows = _.range(1,21);
    var columns = _.range(1,5);

    _.each(rows, function(num){
      var $row = $("<tr>")
      $row.appendTo("#seatPlanning");
      _.each(columns, function(n){
        var $column = $('<td>');
        $column.appendTo($row);
      });
    });


    // this.$el.html(markup);
    this.$el.html(markup);




  }


});
