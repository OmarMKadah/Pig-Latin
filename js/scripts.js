function translator (input) {
  var vowels = ["a","e","i","o","u"];
  var cons = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z",]
  var qu = ["qu"]
  input=input.split("");
  console.log(input);
  //
  // for (i=0; i<=input.length; i+=1)

  if (vowels.includes(input[0])) {
  input.push("way");


  } else if (cons.includes(input[0])) {
    if (input[0] === "q") {
      input.push(input[0])
      input.push(input[1])
      input.shift()
      input.shift()
      input.push("ay");
    } else {
  input.push(input[0]);
  input.push("ay");
  input.shift();
}

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
