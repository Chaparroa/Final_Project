$(document).ready(function() {
//nav hamburger js

// dropdown toggle js
	//hide the list of Transit lines
	$(".transit").hide();
	// detect when someone clicks on the dropdown title
	$("h2").click(transitLines);

	//toggle the transit lines	
	function transitLines(){
		console.log("hide/show toggle has been clicked");
		$(".transit").slideToggle();
	}

//slideshow js
});
