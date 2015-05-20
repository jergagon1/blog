$(document).ready(function(){
  console.log("Ready!");

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

  // Show new article form
  // listen for button click
  $(".show-new-article-form").on("click", function(event){
    event.preventDefault();
    console.log("button clicked!");
    // hide new button
    $(".show-new-article-form").hide();
    // show form div
    $(".new-article").show();
  });
  // event listener for form submit
  // prevent default


});
