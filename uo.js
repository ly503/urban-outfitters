$(document).ready(function(){
	$(window).scroll(function() {

		if ($(window).width() > 989) {	
		  	var distanceScrolled = $(document).scrollTop();
		  	if (distanceScrolled >= 50) {
		  		$(".nav").css("top", 0);
		  		$(".nav").css("position", "fixed");
		  	}
		  	else {
		  		// $(".nav").attr("style", "");
		  		$(".nav").css("top" , 50);
		  		$(".nav").css("position", "absolute");
		  	}
		} else {
			$(".nav").attr("style", "");
		}
	})

	$(window).resize(function() {
		$(window).scroll();
		if ($(window).width() > 989) {
			$(".mobile-nav-dropdown").hide();
		}
	});

  	$( ".mobile-left-nav" ).click(function() {
  		$(".mobile-nav-dropdown").toggle();

});

});