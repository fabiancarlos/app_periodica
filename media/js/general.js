/*! author: Fabian Carlos --- email: Fabian.pow@gmail.com --- 2012 */



var APP = {

};


jQuery(function($){




$('#tabela .elemento').click(function(event){
	event.preventDefault();

	

	var back = $(this).css('background');
	var titulo = $(this).attr('title');
	var simbolo = $(this).children('span.simb').text();
	var ato = $(this).children('span.ato').text();

	console.log(titulo);

	$('#conteudo .elemento').css('background', back);

	$('#conteudo .elemento p.nome').text(titulo);

	$('#conteudo .elemento p.simbolo').text(simbolo);

	$('#conteudo .elemento span.ato').text(ato);



});



});
