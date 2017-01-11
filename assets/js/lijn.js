$(document).ready(function () {
    beginpos = 0;
    eindpos = 0;
    aantalLijnen = 0;
    MAX_LIJNEN = 3;
});

//check of begin of eind positie is geselecteerd
function makeLine(entity, gravity){
    cursorClick();
    //start alleen bij beginLine (voeding)
    if (entity.getAttribute('id') == "beginLine"){
        setLineBegin(entity);
    }
    //nog geen eindpositie maar wel beginpositie
    else if (beginpos != 0) {
        setLineEind(entity, gravity);
    }
}

function setLineBegin(entity) {
    beginpos = entity.getAttribute('position');
}

function setLineEind(entity, gravity) {
    eindpos = entity.getAttribute('position');
    drawLine(gravity);
}

//voeg de lijn toe aan scene met goede posities
function drawLine(gravity){
    var beginposX = beginpos['x'];
    var beginposY = beginpos['y'];
    var beginposZ = beginpos['z'];
    var eindposX = eindpos['x'];
    var eindposY = eindpos['y'];
    var eindposZ = eindpos['z'];
    if (gravity < 0 || gravity == undefined) {
        gravity = 0.5;
    }
    console.log(gravity);

    console.log("Van: " + beginposX, beginposY, beginposZ + " Naar: " + eindposX, eindposY, eindposZ);
    $('#page').append('<a-entity mixin="cable" line="gravity: '+ gravity +'; path: '+ beginposX +' '+ beginposY +' '+ beginposZ +', '+ eindposX +' '+ eindposY +' '+ eindposZ +'"></a-entity>');

    //reset voor een nieuwe lijn
    beginpos = 0;
    eindpos = 0;
    aantalLijnen += 1;

    //alle lijnen zijn gemaakt
    if (aantalLijnen >= MAX_LIJNEN){
        $("#beginLine").attr("visible", false);
        $("#motherboardLine").attr("visible", false);
        $("#processorLine").attr("visible", false);
        $("#videokaartLine").attr("visible", false);
    }
}

var coordinates = AFRAME.utils.coordinates;
AFRAME.registerComponent('line', {
    // Allow line component to accept vertices and color.
    schema: {
        gravity: { default: 0.5  },
        color: { default: '#333' },
        path: {
            default: [
                { x: -0.5, y: 0, z: 0 },
                { x: 0.5, y: 0, z: 0 }
            ],
            // Deserialize path in the form of comma-separated vec3s: `0 0 0, 1 1 1, 2 0 3`.
            parse: function (value) {
                return value.split(',').map(coordinates.parse);
            },
            // Serialize array of vec3s in case someone does
            // setAttribute('line', 'path', [...]).
            stringify: function (data) {
                return data.map(coordinates.stringify).join(',');
            }
        }
    },
    // Create or update the line geometry.
    update: function (oldData) {
        var vectors = [];

        this.data.path.forEach(function (vec3) {
            vectors.push(vec3.x, vec3.y, vec3.z);
        });

        // smooth curve over this many points
        var numPoints = 100;
        var tussenpunt = 0;

        var a = new THREE.Vector3(vectors[0], vectors[1], vectors[2]);  //beginpunt
        var b = new THREE.Vector3(vectors[3], vectors[4], vectors[5]);  //eindpunt
        var c = new THREE.Vector3(vectors[0], vectors[1], vectors[2]);  //nog een keer beginpunt (voor berekening)

        var hoogsteX = a.max(b).getComponent(0);
        var laagsteY = c.min(b).getComponent(1);
        var laagsteX = c.getComponent(0);
        var tussenX = hoogsteX - laagsteX;

        tussenpunt = new THREE.Vector3(hoogsteX - tussenX/2, laagsteY - this.data.gravity, (vectors[2] + vectors[5]) / 2);

        //maak een lijn met een boog (zwaartekracht)
        spline = new THREE.CatmullRomCurve3([
            new THREE.Vector3(vectors[0], vectors[1], vectors[2]), //beginpunt
            tussenpunt,
            new THREE.Vector3(vectors[3], vectors[4], vectors[5])  //eindpunt
        ]);

        // Set color with material.
        var material = new THREE.LineBasicMaterial({
            color: this.data.color, linewidth: 5
        });
        // Add vertices to geometry.
        var geometry = new THREE.Geometry();
        var splinePoints = spline.getPoints(numPoints);

        for(var i = 0; i < splinePoints.length; i++){
            geometry.vertices.push(splinePoints[i]);
        }

        // Apply mesh.
        this.el.setObject3D('mesh', new THREE.Line(geometry, material));
    },
    // Remove the line geometry.
    remove: function () {
        this.el.removeObject3D('mesh');
    }
});

function cursorClick() {
    // Trigger de cursor om de klik animatie uit te voeren
    document.querySelector('#cursor').emit('cursorclick');
}