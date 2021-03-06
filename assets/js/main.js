$(document).ready(function () {

	loadProgressBar();
    stap = 0;
	isOpgepakt = false;

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
            '</a-entity>' + 
			'<a-entity class="clickable" id="processor-klik" position="3.62 4.87 -3.29" rotation="90 315 0">' +
			'<a-plane height=".7" width=".8" opacity="0" rotation="-90 0 0"></a-plane>' +
			'</a-entity>'
			
			);

        //laat info op scherm zien
        APIscherm('processor');

        $('#processor-klik').on('click', function () {	
            // cursor klik animatie
            cursorClick();
            // play correct sound
            playCorrectSound();

            //motherboard en processor vervangen door combi
            $(this).remove();
			$("#processor-indicator").remove();
            $('#processor-camera').remove();

            //combi van moederboard en processor
            $('#combi-processor').attr('visible', true);
			stap += 1;
			isOpgepakt = false;
        });
    });
	
	$('#koelblok').on('click', function () {
		if (stap == 1 && !isOpgepakt) {
			cursorClick();
			showModelOnCamera(this.id);
			$('#page').append('<a-entity class="clickable" id="koelblok-indicator" position="3.85 4.65 -3.6">' +
                '<a-plane class="indicator" height=".6" width=".7" color="yellow" rotation="-90 0 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>'
				
				+ 
			'<a-entity class="clickable" id="koelblok-klik" position="3.55 4.91 -3.12" rotation="90 315 0">' +
			'<a-plane height=".7" width=".8" opacity="0"  rotation="-90 0 0"></a-plane>' +
			'</a-entity>');

            //laat info op scherm zien
            APIscherm('koelblok');
				
			$("#koelblok-klik").on("click", function() {
				playCorrectSound();

				$(this).remove();
				$("#koelblok-indicator").remove();
				$("#koelblok-camera").remove();
				
				$("#combi-koelblok").attr("visible", true);
				stap += 1;
				isOpgepakt = false;
			});
		}
		else{
		    playIncorrectSound();
        }
	});

    $('#motherboard').on('click', function () {
        if (stap == 2 && !isOpgepakt) {
            cursorClick();
            showModelOnCamera(this.id);
            $('#page').append('<a-entity class="clickable" id="motherboard-indicator" position="-3.3 6.46 -2.68">' +
                '<a-plane class="indicator" height="2.1" width="2.2" color="yellow" rotation="0 45 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>'+ 
				'<a-entity class="clickable" id="motherboard-klik" position="-3.29 6.45 -2.68">' +
				'<a-plane height="2.1" width="2.2" opacity="0" rotation="0 45 0"></a-plane>' +
				'</a-entity>');

            //laat info op scherm zien
            APIscherm('moederbord');

            $('#motherboard-klik').on('click', function () {
                // play correct sound
                playCorrectSound();

                //motherboard en processor vervangen door combi
                $(this).remove();
				$("#motherboard-indicator").remove();
                $('#motherboard-camera').remove();
				$('#motherboard').removeClass('clickable');
                $('#motherboard').attr('visible', true);
				$('#motherboard').attr('position', '-3.5 6.66 -2.4');
				$('#motherboard').attr('rotation', '0 135 90');

				stap += 1;
				isOpgepakt = false;
            });
        }
        else{
            playIncorrectSound();
        }
    });
	
	$("#voeding").on("click", function() {
		if (stap >= 3 && !isOpgepakt) {
			$('#voeding').removeClass('clickable');
			cursorClick();
			showModelOnCamera(this.id);
			$('#page').append('<a-entity class="clickable" id="voeding-indicator" position="-3.51 4.87 -2.45">' +
                '<a-plane class="indicator" height="0.77" width="1.554" color="yellow" rotation="0 45 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>'+ 
				'<a-entity class="clickable" id="voeding-klik" position="-3.50 4.88 -2.45">' +
				'<a-plane height="0.77" width="1.554" opacity="0" rotation="0 45 0"></a-plane>' +
				'</a-entity>');

            //laat info op scherm zien
            APIscherm('voeding');

			$("#voeding-klik").on("click", function() {
				playCorrectSound();
				$(this).remove();
				$("#voeding-indicator").remove();
				$("#voeding-klik").remove();
				$("#voeding-camera").remove();
				$('#voeding').attr('visible', true);
				$('#voeding').attr('position', '-3.34 4.56 -1.72');

				stap += 1;
				isOpgepakt = false;
				if (stap == 7) {
					APIscherm('geen');
					makeLines();
				}
			});
		}
        else{
            playIncorrectSound();
        }
	});
	
	
	$("#videokaart").on("click", function() {
		if (stap >= 3 && !isOpgepakt) {
			$('#videokaart').removeClass('clickable');
			cursorClick();
			showModelOnCamera(this.id);
			$('#page').append('<a-entity class="clickable" id="videokaart-indicator" position="-3.23 5.79 -2.05">' +
                '<a-plane class="indicator" height="0.2" width="1.45" color="yellow" rotation="0 45 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>'+ 
				'<a-entity class="clickable" id="videokaart-klik" position="-3.22 5.79 -2.04">' +
				'<a-plane height="0.25" width="1.50" opacity="0" rotation="0 45 0"></a-plane>' +
				'</a-entity>');
				
			APIscherm('videokaart');
			
			$("#videokaart-klik").on("click", function() {
				playCorrectSound();
				$(this).remove();
				$("#videokaart-indicator").remove();
				$("#videokaart-camera").remove();
				$('#videokaart').attr('visible', true);
				$('#videokaart').attr('position', '-3.34 5.76 -1.96');
				$('#videokaart').attr('rotation', '-90 45 90');

				stap += 1;
				isOpgepakt = false;
				if (stap == 7) {
					APIscherm('geen');
					makeLines();
				}
			});
		}
		else {
			playIncorrectSound();
		}
	});
	
	$("#ram").on("click", function() {
		if (stap >= 3 && !isOpgepakt){
			$('#ram').removeClass('clickable');
			cursorClick();
			showModelOnCamera(this.id);
			$('#page').append('<a-entity class="clickable" id="ram-indicator" position="-3.05 7.26 -2.73">' +
                '<a-plane class="indicator" height="1.1" width=".25" color="yellow" rotation="0 45 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>'+ 
				'<a-entity class="clickable" id="ram-klik" position="-3.02 7.26 -2.71">' +
				'<a-plane height="1.1" width=".25" opacity="0" rotation="0 45 0"></a-plane>' +
				'</a-entity>');
				
			APIscherm('ram');
			
			$("#ram-klik").on("click", function() {
				playCorrectSound();
				$(this).remove();
				$("#ram-indicator").remove();
				$("#ram-klik").remove();
				$("#ram-camera").remove();
				$("#ram").attr("visible", true);
				$("#ram").attr('position', '-3.06 6.71 -2.77');
				$("#ram").attr('rotation', '0 135 90');

				stap += 1;
				isOpgepakt = false;
				if (stap == 7) {
					APIscherm('geen');
					makeLines();
				}
			});
		}
		else {
			playIncorrectSound();
		}
	});
	
	$("#hardeschijf").on("click", function() {
		if (stap >= 3 && !isOpgepakt){
			$('#hardeschijf').removeClass('clickable');
			cursorClick();
			showModelOnCamera(this.id);
			$('#page').append('<a-entity class="clickable" id="hardeschijf-indicator" position="-1.61 7.25 -2.82">' +
                '<a-plane class="indicator" height="0.25" width="1.45" color="yellow" rotation="0 45 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>'+ 
				'<a-entity class="clickable" id="hardeschijf-klik" position="-1.62 7.25 -2.83">' +
				'<a-plane height="0.25" width="1.45" opacity="0" rotation="0 45 0"></a-plane>' +
				'</a-entity>');
				
			APIscherm('hardeschijf');
			
			$("#hardeschijf-klik").on("click", function() {
				playCorrectSound();
				$(this).remove();
				$("#hardeschijf-indicator").remove();
				$("#hardeschijf-camera").remove();
				$('#hardeschijf').attr('visible', true);
				$('#hardeschijf').attr('position', '-1.9 7.37 -3.35');
				$('#hardeschijf').attr('rotation', '0 -45 0');
				
				stap += 1;
				isOpgepakt = false;
				if (stap == 7) {
					APIscherm('geen');
					makeLines();
				}
			});
		}
		else {
			playIncorrectSound();
		}
	});
	$("#infoknop").on('click', function () {
		if (stap == 99){
			APIscherm('einde');
		}
		else{
			playIncorrectSound();
		}
	});
});

function makeLines(){
    //laatste stap!! Trek lijnen.
	$("#beginLine").attr("visible", true);
	// $("#motherboardLine").attr("visible", true);
	// $("#processorLine").attr("visible", true);
	// $("#videokaartLine").attr("visible", true);
}

function cursorClick() {
    // Trigger de cursor om de klik animatie uit te voeren
    document.querySelector('#cursor').emit('cursorclick');
}

function playCorrectSound(){
	var correctAudio = document.getElementById('correctSound');
    correctAudio.currentTime = 1.5;
    correctAudio.play();
}

function playIncorrectSound() {
	var incorrectAudio = document.getElementById('incorrectSound');
    incorrectAudio.play();
}

function showModelOnCamera(model) {
	isOpgepakt = true;
    $('#' + model).attr('visible', false);
    $('#' + model + '-camera').attr('visible', true);
}


function loadProgressBar () {
	width = 1;
	setInterval(function(){
		if (width >= 100){
			clearInterval(this);
			$("#loadingDiv").remove();
			$("#vrDiv").show();
		} else {
			width++;
			$("#Bar").css("width",width+'%');
			$("#barLabel").html(width + '%');
		}
	}, 100);
	
}