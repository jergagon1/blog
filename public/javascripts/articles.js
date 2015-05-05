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
      // $(".articles-list").append("<li>" + response[i] )
    }
  })
  .fail(function(){
    console.log("Error")
  });


});
