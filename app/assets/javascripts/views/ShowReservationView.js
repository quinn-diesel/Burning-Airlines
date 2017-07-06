var app = app || {};

app.ShowReservationView = Backbone.View.extend({
  tagName: 'tr',

  render: function (){

    console.log(this.collection);

    _.each(this.collection.models, function( res ){
      var rawTemplate = $('#ShowReservationTemplate').html();
      var template = _.template( rawTemplate );
      var markup = template(res.attributes);
      this.$el.html( markup ).appendTo('#reservations');
      console.log(res);
    });

    $('#reservations').show();

  }


});
