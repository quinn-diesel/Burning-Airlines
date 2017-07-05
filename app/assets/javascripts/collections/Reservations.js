var app = app || {};


app.Reservations = Backbone.Collection.extend({

  url: '/reservations',
  model: app.Reservation,

  initialize: function(){

    this.on('add', function(reservation){
      console.log('A new reservation is added');

    });


  }


});
