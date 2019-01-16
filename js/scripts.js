

$(document).ready(function() {
  $("#addressForm").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#addName").val();
    var lastInput = $("input#addLast").val();
    var phoneInput = $("input#addPhone").val();
    var emailInput = $("input#addEmail").val();

    $(".add").append("<li>" + nameInput + "</li>" + "<li>" + lastInput + "</li>" + "<li>" + phoneInput + "</li>"+ "<li>" + emailInput + "</li>");



    // $(".add").append("<li>" + lastInput + "</li>");
    // $(".add").text(phoneInput);
    // $(".add").text(emailInput);


  });


});



var dogsName = {
  name: "Billy",
  phone: 234234234234,
}
var arr = [];
// [dogsName, variable, variable]
// [0,1,2..]
arr
arr.push(dogsName);
arr[0]
