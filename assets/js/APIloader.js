$(document).ready(function() {
    $('#infoknop').on('click', function () {
        if (stap == 0) {
            getData('Processor_(computer)');
        }
        if (stap == 1) {
            getData('Moederbord');
        }
        // TODO: alle andere stappen toevoegen
    })
});

function getData(dataString){
    $.ajax({
        url: 'https://nl.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + dataString,
        method: 'GET',
        dataType: "jsonp",
        success: function(msg) {
            var pageID = 0;

            switch (dataString) {
                case "Moederbord":
                    pageID = 11383;
                    break;
                case "Processor_(computer)":
                    pageID = 1353;
                    break;
                case "Random-access_memory":
                    pageID = 11427;
                    break;
                case "Voeding_(elektronica)":
                    pageID = 142004;
                    break;
                case "Videokaart":
                    pageID = 23292;
                    break;
            }
            var informatie = (msg['query']['pages'][pageID]['extract']);
            $('#informatie-text').attr('bmfont-text', 'text: ' + informatie + '; color: white; width: 800.00; lineHeight: 33.00');
        }
    });
}