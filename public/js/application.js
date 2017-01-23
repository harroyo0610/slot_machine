$(document).ready(function() {
  $("#slot-machine").on("submit", function(event) {
    console.log("hola");
    event.preventDefault();
    url = $(this).attr("action");
    $.post(url, function(data) {
      $( "#die" ).html(data);
    });
   });
});