$(document).ready(function () {
    stap = 0;

    $('#processor').on('click', function () {
        // cursor klik animatie
        cursorClick();
        // model aan camera (oppakken)
        showModelOnCamera(this.id);
        $('#tutorial-text').attr('bmfont-text',' ');

        //opgepakt
        $('#page').append('<a-entity id="processor-indicator" position="2.85 4.55 -3.6">' +
            '<a-plane class="indicator" height=".6" width=".7" color="yellow" rotation="-90 0 0"></a-plane>' +
            '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="1500"></a-animation>' +
            '</a-entity>');

        $('#processor-indicator').on('click', function () {
            cursorClick();
            //motherboard en processor vervangen door combi
            $(this).remove();
            $('#processor-camera').remove();

            //combi van moederboard en processor
            $('#combi-processor').attr('visible', true);
            stap = 1;
        });
    });

    $('#motherboard').on('click', function () {
        if (stap == 1) {
            cursorClick();
            showModelOnCamera(this.id);
            $('#page').append('<a-entity id="motherboard-indicator" position="-3.3 6.46 -2.68">' +
                '<a-plane class="indicator" height="2.1" width="2.2" color="yellow" rotation="0 45 0"></a-plane>' +
                '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="2000"></a-animation>' +
                '</a-entity>');
            $('#motherboard-indicator').on('click', function () {
                //motherboard en processor vervangen door combi
                $(this).remove();
                $('#motherboard-camera').remove();
                $('#kast-motherboard').attr('visible', true);
                $('#kast-processor').attr('visible', true);

                stap = 2;
            });
        }
    });
});

function cursorClick() {
    // Trigger de cursor om de klik animatie uit te voeren
    document.querySelector('#cursor').emit('cursorclick');
}

function showModelOnCamera(model) {
    $('#' + model).remove();
    $('#' + model + '-camera').attr('visible', true);
}
