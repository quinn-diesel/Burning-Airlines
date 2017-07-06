var app = app || {};


app.FlightDetailView = Backbone.View.extend({

  el: '#flightDetail',


  render: function(){

    var rawTemplate = $('#FlightDetailViewTemplate').html();
    var template = _.template(rawTemplate);
    var markup = template(this.model.attributes);

    var reserved = this.model.attributes.reservations;
    var reservedCheck = _.pluck(reserved, 'seat_no');

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
        var seat_no = num + letters[n-1]
        var $column = $('<td class="seat">').attr('seat_no', seat_no).text(seat_no);
        $column.appendTo($row);

        if ( _.contains(reservedCheck, seat_no) ){
          $column.addClass('reserved');
        }

      });
    });

    var reservation = new app.Reservation();

    var valueToSave = {
      flight_id: this.model.get('id'),
      seat_no: ''
    };

    $(document).on('click', ".seat", function(){
      if ( $(this).hasClass('reserved') ) {
        return;
      }
      $(".seat").not(this).removeClass('selected');
      $(this).toggleClass('selected');
      valueToSave.seat_no = $(this).attr('seat_no');
      console.log("Current Seat: " + valueToSave.seat_no);

    });

    // click to saveSeat



    $(document).on('click', '#saveSeat', function(){



      reservation.save(valueToSave);
      app.router.navigate( "reservations", true );

      console.log('saved: ', reservation);
    });


    // this.$el.html(markup);
    this.$el.html(markup);
    this.$el.append($seatTable);


  }


});
