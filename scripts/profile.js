$(document).ready(function(){
  $("#dropdown").on("mouseenter", function(){
    $(".dropdown-projects").addClass("active")
  })
  $("#dropdown").on("mouseleave", function(){
    $(".dropdown-projects").removeClass("active")
  })
})
