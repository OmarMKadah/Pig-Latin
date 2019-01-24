


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
		console.log("submitted")
    var input = ($("input#translate").val());
    //var result = translator(input);
    console.log(input)
    //$("#result").text(result);
  });
});
