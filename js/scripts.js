// Business Logic
var sentence = []

// sentence.charAt(0);
console.log(pigLatin);
var pigLatin = function(sentence) {
  if (sentence[0] === "a" || sentence[0] === "e" || sentence[0] === "i"|| sentence[0] === "o"|| sentence[0] === "u") {
    return (sentence+"way");
  } else if (sentence[0]=== "p"){
      // sentence.slice(0,1);
      return (sentence + (sentence.shift(0,1)+"way"));
      
  } else  {
    alert("False");
    return false;
  }
};

// console.log(sentence);


// User Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentenceInput").val().split("");
    console.log(sentence)
    var result = pigLatin(sentence);



    $("#result").text(result);
  })
})