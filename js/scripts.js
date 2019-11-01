$(document).ready(function() {
  $("form#user").submit(function(event) {

    var input = $("#input1").val();
    var output = [];

      for(var i = 0; i <= input; i++) {
        var loopNumbers = i.toString();
        console.log(loopNumbers);

        if (loopNumbers.indexOf("3") > -1) {
          output[i] = "I'm sorry Dave, I'm afraid I can't do that";
          console.log(output[i]);
        } else if (loopNumbers.indexOf("2") > -1) {
          output[i] = "boop";
        } else if (loopNumbers.indexOf("1") > -1) {
          output[i] = "beep";
        } else {
          output[i] = loopNumbers;
        }
      }

    $(".output").text(output);
    $(".outputReverse").text(output.reverse());

    event.preventDefault();
  });
});
