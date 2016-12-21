$(document).ready(function(){
	$('#logo-gif').attr('src', 'assets/img/logo-gif.gif'); //reset gif animatie
	setTimeout(loaded, 8000);
});

function loaded() {
	$('#vrDiv').css('visibility', 'visible');
	$('#splashDiv').css('display', 'none');
}