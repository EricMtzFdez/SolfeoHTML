var aciertos = 0;
var fallos = 0;
var notaActual = 0;

class nota {
    constructor(path, nombre) {
        this.path = path;
        this.nombre = nombre;
    }
}

let notas = new Array();


function inicializar() {


    notas = new Array();


    if(document.getElementById("ck00").checked == true){
        notas.push (new nota("../img/Notas SOL/0.jpg", "sol"));
    }

    if(document.getElementById("ck01").checked == true){
        notas.push (new nota("../img/Notas SOL/1.jpg", "la"));
    }

    if(document.getElementById("ck02").checked == true){
        notas.push (new nota("../img/Notas SOL/2.jpg", "si"));
    }

    if(document.getElementById("ck03").checked == true){
        notas.push(new nota("../img/Notas SOL/3.jpg", "do"));
    }

    if(document.getElementById("ck04").checked == true){
        notas.push(new nota("../img/Notas SOL/4.jpg", "re"));
    }

    if(document.getElementById("ck05").checked == true){
        notas.push(new nota("../img/Notas SOL/5.jpg", "mi"));
    }

    if(document.getElementById("ck06").checked == true){
        notas.push(new nota("../img/Notas SOL/6.jpg", "fa"));
    }

    if(document.getElementById("ck07").checked == true){
        notas.push(new nota("../img/Notas SOL/7.jpg", "sol"));
    }

    if(document.getElementById("ck08").checked == true){
        notas.push(new nota("../img/Notas SOL/8.jpg", "la"));
    }

    if(document.getElementById("ck09").checked == true){
        notas.push(new nota("../img/Notas SOL/9.jpg", "si"));
    }

    if(document.getElementById("ck10").checked == true){
        notas.push(new nota("../img/Notas SOL/10.jpg", "do"));
    }

    if(document.getElementById("ck11").checked == true){
        notas.push(new nota("../img/Notas SOL/11.jpg", "re"));
    }

    if(document.getElementById("ck12").checked == true){
        notas.push(new nota("../img/Notas SOL/12.jpg", "mi"));
    }

    if(document.getElementById("ck13").checked == true){
        notas.push(new nota("../img/Notas SOL/13.jpg", "fa"));
    }

    if(document.getElementById("ck14").checked == true){
        notas.push(new nota("../img/Notas SOL/14.jpg", "sol"));
    }

    if(document.getElementById("ck15").checked == true){
        notas.push(new nota("../img/Notas SOL/15.jpg", "la"));
    }

    if(document.getElementById("ck16").checked == true){
        notas.push (new nota("../img/Notas SOL/16.jpg", "si"));
    }

    if(document.getElementById("ck17").checked == true){
        notas.push (new nota("../img/Notas SOL/17.jpg", "do"));
    }

    if(document.getElementById("ck18").checked == true){
        notas.push (new nota("../img/Notas SOL/18.jpg", "re"));
    }


    generarNota()
}


function generarNota() {

    notaActual2 = notaActual;
    notaActual = getRandomInt(0, (notas.length));

    while (notaActual2 == notaActual) {
        if(notas.length <= 1){
            break;
        }
        notaActual = getRandomInt(0, (notas.length))
    }

    console.log(notaActual)

    document.getElementById("img").src = notas[notaActual].path;
}

function check() {
    let label = document.getElementById("LbPuntuacion")

    if (document.getElementById("txTexto").value.toLowerCase() == notas[notaActual].nombre) {
        aciertos += 1;
    } else {
        fallos += 1;
    }

    label.innerHTML = "Aciertos: " + aciertos + " | Fallos: " + fallos;
    document.getElementById("txTexto").value = "";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Al pulsar enter en el cuadro de texto
//https://stackoverflow.com/questions/905222/prevent-form-submission-on-enter-key-press
const node = document.getElementById("txTexto");
node.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        //Código

        if (!document.getElementById("txTexto").value == "") {

            if (document.getElementById("txTexto").value.toLowerCase() == "do" ||
                document.getElementById("txTexto").value.toLowerCase() == "re" ||
                document.getElementById("txTexto").value.toLowerCase() == "mi" ||
                document.getElementById("txTexto").value.toLowerCase() == "fa" ||
                document.getElementById("txTexto").value.toLowerCase() == "sol" ||
                document.getElementById("txTexto").value.toLowerCase() == "la" ||
                document.getElementById("txTexto").value.toLowerCase() == "si") {

                check();
                generarNota();
            }
        }
    }
});