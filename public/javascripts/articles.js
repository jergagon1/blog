$(document).ready(function(){
  console.log("Yo!");

  // load articles
  $.ajax({
    url: '/articles',
    type: 'get'
  })
  .done(function(response){
    console.log(response);
    var context = { articles: response };
    var source = $("#article-template").html();
    var template = Handlebars.compile(source);
    var html = template(context);
    $(".articles-list").append(html);
  })
  .fail(function(){
    console.log("Error")
  });

});
