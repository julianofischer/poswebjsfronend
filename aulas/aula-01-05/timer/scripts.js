var elapsedSegundos = 0;
var elapsedMinutos = 0;
var idInterval = 0;

function chamarEvento(button) {
    const label = button.innerHTML;
    if (label.trim() == "Iniciar") {
        iniciar();
    } else if (label.trim() == "Parar") {
        parar();
    } else if (label.trim() == "Pausar") {
        pausar();
    }
}

function parar() {
    clearInterval(idInterval);
    idInterval = 0;
    elapsedMinutos = 0;
    elapsedSegundos = 0;
    mudaSegundo();
    mudaMinuto();
}

function iniciar() {
    if(!idInterval){
        idInterval = setInterval(mudarTempo, 100);
    }
}

function pausar(){
    clearInterval(idInterval);
    idInterval = 0;
}

function mudarTempo() {
    elapsedSegundos++;

    if (elapsedSegundos == 60) {
        elapsedMinutos++;
        elapsedSegundos = 0;
        mudaMinuto();
    }

    mudaSegundo();
}

function mudaSegundo() {
    const spanSegundos = document.getElementById("segundos");
    let strSeg = String(elapsedSegundos);
    strSeg = strSeg.padStart(2, '0');
    spanSegundos.innerHTML = strSeg;
}

function mudaMinuto() {
    const spanMinutos = document.getElementById("minutos");
    let strMin = String(elapsedMinutos);
    strMin = strMin.padStart(2, '0');
    spanMinutos.innerHTML = strMin;
}

