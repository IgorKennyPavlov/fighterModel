$(function() {

//Мышь

	$(document).on("mousedown", function(e) {
		e.preventDefault();
		$(document).on("mousemove", function(e) {
			$(".scene").css({
				"transform" : "rotateX(" + (-e.pageY) + "deg) rotateY(" + e.pageX + "deg)"
			});
		});
		$(document).on("mouseup", function(e) {
			e.preventDefault();
			$(document).off("mousemove");
		});
	});

//Тач

	$(document).on("touchstart", function(e) {
		$(document).on("touchmove", function(e) {
			$(".scene").css({
				"transform" : "rotateX(" + (-e.targetTouches[0].pageY) + "deg) rotateY(" + e.targetTouches[0].pageX + "deg)"
			});
		});
	});

});