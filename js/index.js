$(document).ready(function() {
	initializePage();
});
/*
function loadNav(){
    $("#included_nav").load('navigation.html'); 
}
*/
function initializePage() {

	$("#signup").click(function () {
		var username = $('#username').val();
		var password = $('#password').val();
		username = username.replace(/\s+/g, '');
		password = password.replace(/\s+/g, '');
		if (localStorage.getItem(username)) {
	    	window.alert("This username has already been used!");
		}
		else if (username.length == 0) {
			window.alert("Username is empty!");
		}
		else if (password.length == 0) {
			window.alert("Password is empty!");
		}
		else {
			localStorage.setItem(username, password);
			window.alert("You're signed up! Try logging in now!");
		}
	});

	$("#login").click(function () {
	    var username = $('#username').val();
		var password = $('#password').val();
		username = username.replace(/\s+/g, '');
		password = password.replace(/\s+/g, '');
		if (username.length == 0) {
			window.alert("Username is empty!");
		}
		else if (password.length == 0) {
			window.alert("Password is empty!");
		}
		else if (localStorage.getItem(username) != password) {
			window.alert("Username or password is wrong.");
		}
		else {
			window.location.href='breweries.html';
		}
	});
}
