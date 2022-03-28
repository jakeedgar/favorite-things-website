


$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    let input1 = $("#color").val();
    let input2 = $("#dog").val();
    let input3 = $("#taco").val();
    
    let array = [input1, input2, input3]
    console.log(array);

    $("#output").text(array)
    
  });
});