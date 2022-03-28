


$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    let input1 = $("#color").val();
    let input2 = $("#dog").val();
    let input3 = $("#taco").val();
    let input4 = $("#hero").val();
    let input5 = $("#salad").val();
    let array = [input1, input2, input3, input4, input5]
    let array2 = [ ]
    array2.push(array[1], array[0], array[2]);

    $(".list1").append(array2[0]);
    $(".list2").append(array2[1]);
    $(".list3").append(array2[2]);

    $("#output").show();
  });
});
