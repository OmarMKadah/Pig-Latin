function translator (input) {
  var vowels = ["a","e","i","o","u"];
  input=input.split("");
  console.log(input);
  //
  // for (i=0; i<=input.length; i+=1)

  if (vowels.includes(input[0])) {
  input.push("way");

  } else {
  input.push("ay");

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
