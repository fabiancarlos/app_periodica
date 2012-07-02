/*! author: Fabian Carlos --- email: Fabian.pow@gmail.com --- 2012 */



var APP = {

};


jQuery(function($){



// clica no elemento, aparece conteudo no topo
$('#tabela .elemento').click(function(event){
	event.preventDefault();

	var back = $(this).attr('class');
	var titulo = $(this).attr('title');
	var simbolo = $(this).children('span.simb').text();
	var ato = $(this).children('span.ato').text();
	var m_ato = $(this).children('span.m_ato').text();

	console.log(back);

	$('#conteudo .elemento').attr('class',back);

	$('#conteudo .elemento p.nome').text(titulo);

	$('#conteudo .elemento p.simbolo').text(simbolo);

	$('#conteudo .elemento p.m_ato').text(m_ato);

	$('#conteudo .elemento span.ato').text(ato);

});

// hover nos tipos dos elementos
$('#tipos_estados li a').each(function(){

	var class_element;

	$(this).hover(function(){

		class_element = $(this).attr('class');

		$('#tabela .elemento').each(function(){

			$(this).not('.'+class_element).addClass('transparent');
		});

	}, function(){

		$('#tabela .elemento').each(function(){

			$(this).not('.'+class_element).removeClass('transparent');
		});

	});
});


// click para pull nos tipos dos elementos
var class_element;

$('#tipos_estados li a').toggle(function(event){
	event.preventDefault();

	// $(this).css('border', '3px solid red');

	class_element = $(this).attr('class');


}, function(event){
	event.preventDefault();

	// $(this).css('border', '3px solid #333');

});




});
