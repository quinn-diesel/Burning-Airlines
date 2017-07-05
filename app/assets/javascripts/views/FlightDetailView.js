var app = app || {};


app.FlightDetailView = Backbone.View.extend({

  el: '#app',

  render: function(){

    var rawTemplate = $('#FlightDetailViewTemplate').html();
    var template = _.template(rawTemplate);
    var markup = template(this.model.attributes);

    var rowSize = this.model.attributes.airplane.rows;
    var columnSize = this.model.attributes.airplane.columns;
    

    var rows = _.range(1,rowSize+1);
    var columns = _.range(1,columnSize+1);
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var $seatTable = $('<table id="seatPlanning">')

    _.each(rows, function(num){
      var $row = $("<tr>")
      $row.appendTo($seatTable);

      _.each(columns, function(n){
        var $column = $('<td class="seat">').attr('row_no', num).attr('column_no', letters[n-1]);
        $column.appendTo($row);
      });
    });

    $(document).on('click', ".seat", function(){
      console.log($(this).attr('row_no'), $(this).attr('column_no'));
      $(this).css("background-color", "green")
    })


    // this.$el.html(markup);
    this.$el.html(markup);
    this.$el.append($seatTable);





  }


});
