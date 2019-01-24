function translator (input) {
  input=input.split("")
  for (i=0; i<=input.length; i+=1) {
  }
  if (input[0] === "a", "e", "i", "o", "u"){
  input.push("way");

 } else {

 }
  return input.join("");
}


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
		console.log("submitted")
    var input = ($("input#translate").val());
    var result = translator(input);
    console.log(input)
    $("#result").text(result);
  });
});
