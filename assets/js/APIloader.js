function APIscherm(huidige) {
    if (huidige == 'processor') {
        getData('Processor_(computer)');
    }
    if (huidige == 'koelblok') {
        getData('Koelplaat');
    }
    if (huidige == 'moederbord') {
        getData('Moederbord');
    }
    if (huidige == 'voeding') {
        getData('Voeding_(elektronica)');
    }
    if (huidige == 'ram') {
        getData('Random-access_memory');
    }
    if (huidige == 'videokaart') {
        getData('Videokaart');
    }
    if (huidige == 'hardeschijf') {
        getData('Harde_schijf');
    }
    if (huidige == 'einde') {
        $('#informatie-text').attr('visible', 'false');
        $('#informatie-logo').attr('visible', 'true');
    }
    //niets meegegeven of 'leeg'
    else {
        $('#informatie-text').attr('bmfont-text', 'text: ;');
    }
}

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
                case "Koelplaat":
                    pageID = 1240351;
                    break;
                case "Harde_schijf":
                    pageID = 15117;
                    break;
            }
            var informatie = (msg['query']['pages'][pageID]['extract']);
            $('#informatie-text').attr('bmfont-text', 'text: ' + informatie + '; color: white; width: 1200.00');
        }
    });
}