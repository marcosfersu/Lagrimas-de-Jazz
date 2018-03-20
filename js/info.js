$( document ).ready(function() {
var unclick = 1;


$('html').mouseout(function() {
	$(".abiertas").addClass("del-todo");
	$(".texto-opciones").addClass("hidden");
});

$('.informacion').mouseover(function(e){

	var abiertas = $(".abiertas");
	var timepo = $(".texto-opciones");

	$(".abiertas").addClass("del-todo");
	$(".texto-opciones").addClass("hidden");
		$(this).find(abiertas).removeClass("del-todo");
		$(this).find(timepo).removeClass("hidden");
	    e.stopPropagation();

});

});