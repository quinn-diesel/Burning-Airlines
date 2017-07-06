var app = app||{};

_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};

// app.posts = new app.Posts();
//
// app.router = new app.AppRouter();
app.router = new app.AppRouter();

app.flights = new app.Flights();

// seating plan View
$(document).on('click', '#displaySeats', function (){
  var rowSize = $('#seatingChart').data('rows');
  var columnSize = $('#seatingChart').data('columns');

  console.log(rowSize, columnSize);

  var rows = _.range(1,rowSize+1);
  var columns = _.range(1,columnSize+1);
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var $seatTable = $('<table id="seatsPlan">')

  _.each(rows, function(num){
    var $row = $("<tr>")
    $row.appendTo($seatTable);

    _.each(columns, function(n){
      var $column = $('<td class="seat">').attr('row_no', num).attr('column_no', letters[n-1]);
      $column.appendTo($row);
    });
  });
  $('#seatingChart').append($seatTable);

});




$(document).ready(function(){
  //once the dom is loaded, fetch the posts from the rails ajax backend
  // app.posts.fetch().done(function(){
    // when the fetch() ajax request is finished, we're ready to start the app
  //   Backbone.history.start();
  // });


  app.flights.fetch().done(function(){
    Backbone.history.start();

  });




});
