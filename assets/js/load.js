$(document).ready(function(){
	$('#logo-gif').attr('src', 'assets/img/logo-gif.gif'); //reset gif animatie
	setTimeout(loaded, 3000);
});

function loaded() {
	$('#vrDiv').css('visibility', 'visible');
	$('#splashDiv').css('display', 'none');
}