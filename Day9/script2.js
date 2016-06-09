$(document).ready(function() {

	$(document).mousemove(function(e){
	    $("#box").css({left:e.pageX, top:e.pageY});
	});

});