// backend logic
var triangle = function(side) {
  side1 = Number(side1);
  side2 = Number(side2);
  side3 = Number(side3);
  if((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
    return "not";
  } else if (side1 === side2 && side2 === side3) {
    return "equilateral"
  } else if (side1 === side2 || (side1 === side3 || side2 === side3)) {
    return "isosceles"
  } else {
    return "scalene"
  }
};

// frontend logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();

    $(".side1").text(side1);
    $(".side2").text(side2);
    $(".side3").text(side3);
    var result = triangle(side1, side2, side3);
    $("." + result).show();
    $("#result").show();
  });
});
