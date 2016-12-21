$(document).ready(function(){
	$("#continueButton").on("click", function(){
	    console.log("click");
		$('#vrDiv').css('visibility', 'visible');
		$('#splashDiv').css('display', 'none');
	});
});
