var app = app||{};

_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};

// app.posts = new app.Posts();
//
// app.router = new app.AppRouter();

$(document).ready(function(){
  //once the dom is loaded, fetch the posts from the rails ajax backend
  // app.posts.fetch().done(function(){
    // when the fetch() ajax request is finished, we're ready to start the app
  //   Backbone.history.start();
  // });

});
