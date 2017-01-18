//business logic
var userInput = 0;
var vowels = ["a", "e", "i", "o", "u"];
var vowelsVal = [];
var vvArray = [];


var concatAy = function(input, index) {
  consonant = input.substring(0,index);
  rest = input.substring(index,input.length);
  return rest + consonant + "ay"
}

var vowelChecker = function(input) {
  vowelsVal = [];
  inputArray = input.split("");
  for (inputIndex = 0; inputIndex < input.length; inputIndex++){
    vowels.forEach(function(vowel) {
      if (inputArray[inputIndex] === vowel) {
        vowelsVal.push(1);
      }
    })
    if(!vowelsVal[inputIndex]){
      vowelsVal.push(0);
    };
  };
  return vowelsVal;
};


var translate = function(input) {
  var piglatin = 0;
  vvArray = vowelChecker(input);
  if (parseFloat(input)) {
    return input;
  } else if(!(vvArray[0]) && !(vvArray[1])) {
      return concatAy(input, 2);
  } else if(!vvArray[0]){
      return concatAy(input, 1);
  }

}


//user interface logic
$(document).ready(function() {
  $("form").submit(function (event) {
    event.preventDefault();
    userInput = $("#user-input").val();
    var result = translate(userInput);
    $("#result").text(result);
  });
});


// testing

// for (ind = 0; ind <= 3; ind++){
//   if (!vvArray[ind]){
//     consonant = input.substring(0,ind+1);
//     rest = input.substring(ind+1,input.length);
//   }
// }
//     return rest + consonant + "ay";
// }else{
//   return input + "ay"
// }
