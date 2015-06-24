var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);


$(".jump-images a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.show();
  
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  console.log("help");
});

$overlay.click(function(){
  $overlay.hide();
});