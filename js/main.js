$(document).ready(function() {

	//arrow key nav
	$(".container-fluid").keyboardScroll({
		scrollSpeed:1500
	});

	//carousel arrow nav
	$(document).bind('keyup', function(e) {

	  if(e.keyCode==39){
		  jQuery('a.carousel-control.right').trigger('click');
		}   
	  else if(e.keyCode==37){
		  jQuery('a.carousel-control.left').trigger('click');
		}

	});

	$('#youtube1').mediaelementplayer({
		features: false
	});

	$('#key').mouseover(function(){
		$('#txt_key').fadeIn();
	}).mouseleave(function(){
		$('#txt_key').fadeOut();
	});
	
});