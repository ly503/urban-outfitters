$(document).ready(function(){
	$(".search-bar").click(function(event) {
		event.preventDefault();
		$(".search-input").show();
		$(".search-input").focus();
		$(".search-input").animate({
			width: "150px"
			});
		$(".search-link").hide();
	});

	$(".search-input").blur(function() {
		$(".search-input").animate({
			width: "0px"
		}, function() {
			$(".search-input").hide();
			$(".search-link").show();
			$(".search-input").val('');

		});
	}); 

	$(".mobile-search-icon").click(function(event){
		$(".mobile-search-icon").hide();
		$(".mobile-search-bar").show();
		$(".mobile-search-bar").focus();
		if ($(window).width() < 601) {
			$(".mobile-search-bar").animate({
			width: "75px"
			});
		} else {
			$(".mobile-search-bar").animate({
			width: "150px"
		});
	};

	});

	$(".mobile-search-bar").blur(function(event) {
		$(".mobile-search-bar").hide();
		$(".mobile-search-bar").val('');
		$(".mobile-search-icon").show();
	})


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


  	$(".footer-title").click(function() {
  		if ($(window).width() < 600) {
		$(".footer-col > li").toggle();	
			if ($(".footer-col > li").is(":visible")) {
				($("footer").css("height","750px"));
			} else {
				($("footer").css("height","400px"));
			}
		}
  	});

});




