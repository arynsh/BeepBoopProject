$(document).ready(function() {
  $("form#user").submit(function(event) {
    console.log("begin execution");
    event.preventDefault;

    var input = $("#input1").val(); // example: 5
    console.log("this is the input" + input);
    var output = [];

    for(var i = 0; i <= input; i++) {
      var loopNumbers = i; // ex: loop through 1 - 5
      console.log(loopNumbers);
      if (loopNumbers === 3) {
        output[loopNumbers] = "I'm sorry Dave, I'm afraid I can't do that";
      } else if (loopNumbers.indexOf("2") > -1) {
        output[loopNumbers] = "boop";
      } else if (loopNumbers.indexOf("1") > -1) {
        output[loopNumbers] = "beep";
      } else {
        output[loopNumbers] = loopNumbers;
      }
    }

    // return output;
    $(".output").text(output);
  });
});
