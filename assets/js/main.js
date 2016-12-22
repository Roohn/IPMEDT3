$(document).ready(function () {
    correctAudio = new Audio('assets/audio/correct.mp3');
    incorrectAudio = new Audio('assets/audio/incorrect.mp3');
    stap = 0;

    $('#processor').on('click', function () {
        // cursor klik animatie
        cursorClick();
        // model aan camera (oppakken)
        showModelOnCamera(this.id);
        $('#tutorial-text').attr('bmfont-text',' ');

        //opgepakt
        $('#page').append('<a-entity class="clickable" id="processor-indicator" position="3.85 4.55 -3.6">' +
            '<a-plane class="indicator" height=".6" width=".7" color="yellow" rotation="-90 0 0"></a-plane>' +
            '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="1500"></a-animation>' +
            '</a-entity>');

        $('#processor-indicator').on('click', function () {
            // cursor klik animatie
            cursorClick();
            // play correct sound
            playCorrectSound();

            //motherboard en processor vervangen door combi
            $(this).remove();
            $('#processor-camera').remove();

            //combi van moederboard en processor
            $('#combi-processor').attr('visible', true);
            stap = 1;
        });
    });
	
	$('#koelblok').on('click', function () {
		if (stap == 1) {
			cursorClick();
			showModelOnCamera(this.id);
			$('#page').append('<a-entity class="clickable" id="koelblok-indicator" position="3.85 4.65 -3.6">' +
                '<a-plane class="indicator" height=".6" width=".7" color="yellow" rotation="-90 0 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>');
				
			$("#koelblok-indicator").on("click", function() {
				playCorrectSound();
				
				$(this).remove();
				$("#koelblok-camera").remove();
				
				$("#combi-koelblok").attr("visible", true);
				stap = 2;
				
			});
		}
		else{
		    playIncorrectSound();
        }
	});

    $('#motherboard').on('click', function () {
        if (stap == 2) {
            cursorClick();
            showModelOnCamera(this.id);
            $('#page').append('<a-entity class="clickable" id="motherboard-indicator" position="-3.3 6.46 -2.68">' +
                '<a-plane class="indicator" height="2.1" width="2.2" color="yellow" rotation="0 45 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>');
            $('#motherboard-indicator').on('click', function () {
                // play correct sound
                playCorrectSound();

                //motherboard en processor vervangen door combi
                $(this).remove();
                $('#motherboard-camera').remove();
                $('#kast-motherboard').attr('visible', true);
                $('#kast-processor').attr('visible', true);
				$("#kast-koelblok").attr("visible", true);

                stap = 3;
            });
        }
        else{
            playIncorrectSound();
        }
    });
	
	$("#voeding").on("click", function() {
		if (stap == 3) {
			cursorClick();
			showModelOnCamera(this.id);
			$('#page').append('<a-entity class="clickable" id="voeding-indicator" position="-3.51 4.87 -2.45">' +
                '<a-plane class="indicator" height="0.77" width="1.554" color="yellow" rotation="0 45 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>');
			$("#voeding-indicator").on("click", function() {
				playCorrectSound();
				$(this).remove();
				$("#voeding-camera").remove();
				$("#kast-voeding").attr("visible", true);
				
				stap = 4;
			});
		}
        else{
            playIncorrectSound();
        }
	});
	
	
});

function cursorClick() {
    // Trigger de cursor om de klik animatie uit te voeren
    document.querySelector('#cursor').emit('cursorclick');
}

function playCorrectSound(){
    correctAudio.currentTime = 1.5;
    correctAudio.play();
}

function playIncorrectSound() {
    incorrectAudio.play();
}

function showModelOnCamera(model) {
    $('#' + model).remove();
    $('#' + model + '-camera').attr('visible', true);
}
