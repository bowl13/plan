$(document).ready(function() {

//ARROW KEY NAV
	 $("section.row-fluid").keyboardScroll(
      {
        downKeyCode     : 40,   // 40 == down arrow
        upKeyCode       : 38,   // 38 == up arrow
        scrollDuration  : 500
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

//MOUSEOVER KEY NAV
	$('#txt_key').delay(5000).fadeOut();

	$('#key').mouseover(function(){
		$('#txt_key').fadeIn();
	}).mouseleave(function(){
		$('#txt_key').fadeOut();
	});
	$(window).scroll(function(){
		$('#txt_key').css('display','inline').delay(1000).fadeOut();
	});

//RESPONSIVE MENU
	$('#simple-menu').sidr({
		side: 'left'
	});
});
/*loading*/
$(window).load(function(){
	$('.load').delay(1000).fadeOut('slow',function(){
		$('#wrap, footer').fadeIn(200);
	});
});