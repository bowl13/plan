$(document).ready(function() {

//ARROW KEY NAV
	$(".container-fluid").keyboardScroll({
		scrollSpeed:1500
	});

//CAROUSEL ARROW NAV
	$(document).bind('keyup', function(e) {

	  if(e.keyCode==39){
		  jQuery('a.carousel-control.right').trigger('click');
		}   
	  else if(e.keyCode==37){
		  jQuery('a.carousel-control.left').trigger('click');
		}

	});

//YOUTUBE VIDEO
	$('#youtube1').mediaelementplayer({
		features: false
	});

//MOUSEOVER
	$('#key').mouseover(function(){
		$('#txt_key').fadeIn();
	}).mouseleave(function(){
		$('#txt_key').fadeOut();
	});

//RESPONSIVE MENU
	$('#simple-menu').sidr({
		side: 'left'
	});
});