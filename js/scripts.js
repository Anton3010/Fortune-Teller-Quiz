$(document).ready(function() {
  $("form#fortuneQuiz").submit(function(event) {
    event.preventDefault();

    $("#results").show();
    $("input:checkbox[name=good-fortune]:checked").each(function() {
      // var goodFortuneResult = $(this).val();
      // $('#results').append(goodFortuneResult + "<br>");
      var inputs = $(this).val();
      $('#results').append(inputs + "<br>");
      $('#results').text("You're a lucky one!");

    });

    $("input:checkbox[name=bad-fortune]:checked").each(function() {
      // var goodFortuneResult = $(this).val();
      // $('#results').append(goodFortuneResult + "<br>");
      var inputs2 = $(this).val();
      $('#results').append(inputs2 + "<br>");
      $('#results').text("You're screwed!");


    });
    // if ('#results').append(inputs + inputs2 + "<br>"){
    //   $('#results').text("You are well balanced!");
    // }

    $('#fortuneQuiz').hide();
  });
});
