$(document).ready(function(){
  $("#dropdown").on("click", function(){
    $("#dropdown-projects").addClass("active")
  })
  $("#dropdown").on("mouseleave", function(){
    setTimeout(function(){
      $("#dropdown-projects").removeClass("active")
    },500)

    })
})
