var romanNumeral = function(n) {
  var array = [];
  for (i = 0 ; i< n ; i++) {

    array.push("I");
  }

  return array;
}



$(document).ready(function() {
  $("form#bottles").submit(function(event) {
    var n = $("input#beers").val();

    var result = romanNumeral(n)



    $(".n").html(result);


    $("#result").show();
    event.preventDefault();
  });
});
