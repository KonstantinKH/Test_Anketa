$(document).ready(function(){

	

	$('.to-info').click(function(e){
	e.preventDefault();
	$('body, html').animate({ scrollTop: $('.b-info').offset().top - 30 }, 700);

	}); 

	$('.to-exper').click(function(e){
	e.preventDefault();
	$('body, html').animate({ scrollTop: $('.b-exper').offset().top - 30 }, 700);

	}); 

	$('.to-javasc').click(function(e){
	e.preventDefault();
	$('body, html').animate({ scrollTop: $('.b-javasc').offset().top - 30}, 700);

	}); 

	$('.to-about').click(function(e){
	e.preventDefault();
	$('body, html').animate({ scrollTop: $('.b-about').offset().top - 30 }, 700);

	}); 

	$("nav a").click(function(){
		$("nav a").removeClass("nav_active")
		$(this).addClass("nav_active")
	});


	$("#slider").slider({

		value: 51

	});


	// menu button


	$(".toggle-button").click(function(){

		$("nav").toggleClass("active-menu");
	});

	$(".toggle-button").click(function() {

	  $(".sandwich").toggleClass("active");

	});

	$("nav a").click(function(){

		$("nav").removeClass("active-menu");
		$(".sandwich").removeClass("active");
	});







}); // ready()







