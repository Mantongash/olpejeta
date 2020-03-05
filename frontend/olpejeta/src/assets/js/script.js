


$(document).ready(function(){
  $("#me").click(function() {

    if ($("#pwd").attr("type") == "password"){
      console.log("clicked")
      $("#me").attr("class", "fa fa-eye-slash");
      $("#pwd").attr("type", "text");
    } else {
      $("#me").attr("class", "fa fa-eye");
      $("#pwd").attr("type", "password");
    }
    // $(this).toggleClass("fa-eye fa-eye-slash");
  
    // var input = $("#pass_log_id").attr("type");
  
    // if (input.attr("type") === "password") {
    //   input.attr("type", "text");
    // } else {
    //   input.attr("type", "password");
    // }
  });
})


