$(document).ready(function(){
	$('.a').hover(function(){
		$(this).css("background-color", "blue");
	}, function() {
		$(this).css("background", "#444");
	});

	$('.b').hover(function(){
		$(this).css("background-color", "red");
	},	function() {
		$(this).css("background-color", "#444");
	});
})
