// Business Logic










// User Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentenceInput").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
  })
})