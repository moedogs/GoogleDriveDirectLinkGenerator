/**
* Google Drive Link Generator
*/
$(function () {
	$('#generar').click(function () {
		var sharingurl = $.trim($('#sharingurl').val());
		if (sharingurl.length <= 0){
			$('#exampleModal').modal('show'); 
			$('#errormsg').text('No has introducido ningún enlace en el cuadro de texto');
			return;
		}
		var googleid = '';
		var regexp = /https:\/\/drive\.google\.com\/file\/d\/(.*?)\/(edit|view)\?usp=sharing/;
		var match = sharingurl.match(regexp);
		if ( match ){
			googleid = match[1];
		}
		else{
			regexp = /https:\/\/drive\.google\.com\/open\?id\=(.*?)$/;
			match = sharingurl.match(regexp);
			if ( match ){
				googleid = match[1];
			}
		}
		if (googleid){
			$('#googlelink').val('https://drive.google.com/uc?export=download&id=' + googleid);
		}
		else{
			$('#exampleModal').modal('show');
			$('#errormsg').text('Por favor, introduce un enláce de para compartir de Google Drive válido');
		}
	});
});

$("#borrar").click(function () {
	location.reload();
});