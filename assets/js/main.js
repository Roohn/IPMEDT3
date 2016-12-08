$(document).ready(function () {
    var stap = 0;

    $('#processor').on('click', function () {
        // cursor klik animatie
        cursorClick();
        // model aan camera (oppakken)
        showModelOnCamera(this.id);

        //opgepakt
        $('#page').append('<a-entity id="processor-indicator" position="2.85 4.55 -3.6">' +
            '<a-plane class="indicator" height=".6" width=".7" color="yellow" rotation="-90 0 0"></a-plane>' +
            '<a-animation attribute="scale" from="1 1 1" to="0 0 0" repeat="indefinite" dur="1500"></a-animation>' +
            '</a-entity>');

        $('#processor-indicator').on('click', function () {
            //motherboard en processor vervangen door combi
            $(this).remove();
            $('#processor-camera').attr('visible', false);

            //combi van moederboard en processor
            $('#combi-processor').attr('visible', true);
            stap = 1;
        });
    });
    $('#motherboard').on('click', function () {
        if(stap == 1){
            cursorClick();
            showModelOnCamera(this.id);
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

function putModelInCase(model, plek) {

    // stop model op de goede plek in de pc kast
    console.log(model + " in " + plek);

}
