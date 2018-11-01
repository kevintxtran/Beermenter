$(document).ready(function() {
	initializePage();
})

function initializePage() {

	$("#locations").change(function () {
	    var location = document.getElementById("locations");
		var loc = "." + location.options[location.selectedIndex].value;
		$("div.brewery-list").children().show();
		$("div.brewery-list").children().not(loc).hide();
	});
}
