var app = app || {};

app.ShowReservationView = Backbone.View.extend({
  tagName: 'tr',

  render: function (){

    //

      var rawTemplate = $('#ShowReservationTemplate').html();
      var template = _.template( rawTemplate );
      var markup = template(this.model.attributes);
      
      this.$el.html( markup ).appendTo('#reservations');



  }


});
