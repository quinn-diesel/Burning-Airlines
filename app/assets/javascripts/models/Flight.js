var app = app || {}


app.Flight =  Backbone.Model.extend({
  urlRoot: '/flights',

  defaults:{
    from: 'Sydney',
    to: 'Melbourne'
  },

  initialize: function(){
    console.log("New Flight Ready");
  }


});
