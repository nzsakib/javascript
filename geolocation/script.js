

jQuery(document).ready(function($) {
	'use strict';
	function myPosition(currentPos) {
		$('.hud').hide();
		var li = $('.location li');
		// console.log(li);
		var lat = document.querySelector('li#lat');
		var lng = document.querySelector('li#lng');
		lat.textContent += currentPos.coords.latitude;
		lng.textContent += currentPos.coords.longitude;

		// console.log(pos.coords.latitude);
	}

	function displayError(message) {
		$('.hud').hide();
		$('.error').text(message).slideDown('slow');
	}
	function gotError(error) {
		var message;
		switch(error.code) {
			case error.PERMISSION_DENIED:
				message = "You need to give permission to get your location";
				break;
		}
		displayError(message);
	}

	$('.error').hide();
	$('.hud').show();
	if( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition(myPosition, gotError);
	} else {
		$(".error").text("Geolocation is not supported").slideDown();
	}
	
	


});
