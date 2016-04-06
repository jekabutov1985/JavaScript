
$(function () {
/*Tabs*/
	
	var $links = $('.menu a');
	$links.on('click', function(e) {
		e.preventDefault();
		$links.removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('href');
		$('.tab').not(tab).hide();
		$(tab).fadeIn(400)
	});

/*Tooltips*/

    $('.aside_box').hover(
		function(){
		$(this).find('span').stop().animate({opacity: 1});
		},
		function(){
		$(this).find('span').stop().animate({opacity: 0});
		}),
	
	$('.help_button').click(function() {
		$('.aside_box span').stop().animate({opacity: 1});
	});
})