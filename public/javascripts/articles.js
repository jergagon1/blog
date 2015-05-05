$(document).ready(function(){
  console.log("Yo!");

  // load articles
  $.ajax({
    url: '/articles',
    type: 'get'
  })
  .done(function(response){
    console.log(response);
    for(var i=0; i < response.length; i++){
      // debugger
      // todo replace this with handlebars
      var template = '<li data-article-id="' + response[i].id + '">' + response[i].title + '</li>';
      $(".articles-list").append(template);
    }
  })
  .fail(function(){
    console.log("Error")
  });


});
