
 $("#locations").change(function () {
    var location = document.getElementById("locations");
  console.log("Hi");
	var loc = location.options[location.selectedIndex].value;console.log(loc);
	$("#locationname").text(loc);
});