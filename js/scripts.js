var test= "it works";

$(document).ready(function() {

  var height = parseInt(prompt("How tall are you?( height in inches)"));
  // event.preventDefault();

  if(height>44) {
    $(".adults").show();
    $(".kids").hide();
  } else if (height===44) {
    $(".adults, .kids").show();
  } else {
    $(".kids").show();
    $(".adults").hide();
    }
});
