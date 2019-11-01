$(document).ready(function() {
  $("form#user").submit(function(event) {

    var input = $("#input1").val();
    var output = [];
    var outputReverse = outPut.reverse();

      for(var i = 0; i <= input; i++) {
        var loopNumbers = i.toString();

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
      return output;


    $(".output").text(output);
    $(".outputReverse").text(outputReverse);

    event.preventDefault();
  });
});
