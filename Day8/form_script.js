$(document).ready(function() {

$("#submit-btn").click(function() {
	phoneValidator ($("#phone").val());
	emailValidator ($("#email").val());
});
});

function phoneValidator(phoneNum) { 

var phoneTest = phoneNum.split("-")

//this checks if it has 3 components
if(phoneTest.length !== 3) {
	alert("Please enter a valid phone number");
}
// this is gonna check if the first component has 3 numbers
else if ((phoneTest[0].length !== 3) || (phoneTest [0] === NaN)) {
	alert("Please enter a valid phone number");
}
else if ((phoneTest[1].length !== 3) || (phoneTest [1] === NaN)) {
	alert("Please enter a valid phone number");
}
else if ((phoneTest[2].length !== 4) || (phoneTest [2] === NaN)) {
	alert("Please enter a valid phone number");
}
else { 
	alert("Valid phone number!");

}
}
function emailValidator(email) { 

var emailTest1 = email.split("@");

if (emailTest1.length !== 2) {
	alert("Please enter a valid email");
} 
else {
	var emailTest2 = emailTest1[0].split(".");

	if (emailTest2.length > 2) {
		alert("Please enter a valid email");
	}

	else { 
		alert("Valid Email!");

	}
}}




//validate email with _____@___.___
// var "email" = 
// if (email) {}
// {
//      alert('Please enter a valid email address.');
//      return false;
// }

// function checkEmail() {

//     var email = document.getElementById('txtEmail');
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//     if (!filter.test(email.value)) {
//     alert('Please provide a valid email address');
//     email.focus;
//     return false;
//  }

//validate phone number with XXX-XXX-XXXX
//check the email and phone number for the correct characters/numbers
//clear field when sumbitted 