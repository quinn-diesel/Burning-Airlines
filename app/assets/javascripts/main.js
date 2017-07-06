var app = app||{};

_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};


app.router = new app.AppRouter();
app.flights = new app.Flights();
app.reservations = new app.Reservations();


// seating plan View in app/views/airplanes/show.html.erb
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
      var seat_no = num + letters[n-1]
      var $column = $('<td class="seat">').attr('seat_no', seat_no).text(seat_no);
      $column.appendTo($row);
    });
  });

  $('#seatingChart').empty();
  $('#seatingChart').append($seatTable);
});




$(document).ready(function(){

  // when the fetch() ajax request is finished, we're ready to start the app
  app.flights.fetch().done(function(){
    Backbone.history.start();

  });


  window.setInterval(function(){
    app.flights.fetch();
    // app.reservations.fetch();
  } , 3000)

});
