$(document).ready(function() {
  $("#button").click(function() {
    $("li").remove();
    var search = $("#box").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + search + "&callback=?"
    $.getJSON(url, function(data) {
        myFunction(data);
      }
    )
  })
});

var myFunction = function(loop) {
  for (var i = 0; i < loop[1].length; i++) {
    $("#list").append(`
      <li>
        <div class='searchresult text-center'>
          <a class='search-title' href=` + loop[3][i] + `>
            <b>` + loop[1][i] + `</b>
          </a>
          <br>
          <br>
          <p class='search-body'>` + loop[2][i] + `</p>
        </div>
      </li>`)
  }
}
