// Business Logic
var sentence = []

// sentence.charAt(0);
// console.log(pigLatin);

var pigLatin = function(sentence) {
  
  if (sentence[0] === "a" || sentence[0] === "e" || sentence[0] === "i"|| sentence[0] === "o"|| sentence[0] === "u") {
    return (sentence+"way");
  }  
  else if (sentence[0] === "q" && sentence[1] === "u"){
    return (sentence + (sentence.splice(0,2) + "way"));
  
  }else if (sentence[1] === "q" && sentence[2] === "u"){
    return (sentence + (sentence.splice(0,3) + "way"));
  }

  else if (sentence[1] !== "a" && sentence[1] !== "e" && sentence[1] !== "i" && sentence[1] !== "o" && sentence[1] !== "u"){
      return (sentence + (sentence.splice(0,2)+"way"));
    }

   else if (sentence[0] !== "a" && sentence[0] !== "e" && sentence[0] !== "i" && sentence[0] !== "o" && sentence[0] !== "u" && sentence[0] === "y"){
      return (sentence + (sentence.shift(0,1)+"way"));
      
     
     
  } else  {
    alert("False");
    return false;
   
  }
 
};

// User Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentenceInput").val().split("");
    
    var result = pigLatin(sentence);

    
// console.log(result);
    $("#result").text(result);
  })
})