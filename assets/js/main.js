$(document).ready(function () {

    $('#processor').on('click', function () {
        // cursor klik animatie
        cursorClick();
        // model aan camera (oppakken)
        showModelOnCamera(this.id);
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

    // TO DO
    // stop model op de goede plek in de pc kast

}
