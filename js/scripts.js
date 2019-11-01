$(document).ready(function() {
  $("form#user").submit(function(event) {
    console.log("begin execution");

    var input = $("#input1").val(); // example: 5
    var output = [];

    for(var i = 0; i <= input; i++) {
      var loopNumbers = i; // ex: loop through 1 - 5

      if (loopNumbers.indexOf("3") > -1) {
        output[i] = "I'm sorry Dave, I'm afraid I can't do that";
      } else if (loopNumbers.indexOf("2") > -1) {
        output[i] = "boop";
      } else if (loopNumbers.indexOf("1") > -1) {
        output[i] = "beep";
      } else {
        output[i] = loopNumbers;
      }
    }

    $(".output").text(output);
    event.preventDefault();
  });
});
