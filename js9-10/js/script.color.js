$(function(){ 
	$('nav li .dropdown').hover(function() {
	$(this).stop().animate({ 
		backgroundColor: "#2c3e50"
	}, 400, 'easeInSine');
 },function() {
	$(this).stop().animate({ 
		backgroundColor: '#000' 
	}, 400, 'easeInSine');
 });
 });