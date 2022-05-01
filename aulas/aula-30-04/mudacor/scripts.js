function mudar(){
    const elements = document.getElementsByClassName("colored-div");
    const div = elements[0];
    const input = document.getElementsByTagName("input")[0];
    const cor = input.value;
    div.style.backgroundColor = cor;
}

var gl = 1;
function ping(){
    console.log("ping " + gl);
    gl++;
}

var idInitCresc;
function initCresc(){
    clearInterval(idInitDiminui);
    idInitCresc = setInterval(cresce, 100);
}

var idInitDiminui;
function initDiminui(){
    clearInterval(idInitCresc);
    idInitDiminui = setInterval(diminui, 100);
}

function cresce(){
    const elements = document.getElementsByClassName("colored-div");
    const div = elements[0];
    let altura = div.offsetHeight + 10;
    let largura = div.offsetWidth + 10;
    div.style.width = largura + "px";
    div.style.height = altura + "px";
}

function diminui(){
    const elements = document.getElementsByClassName("colored-div");
    const div = elements[0];
    let altura = div.offsetHeight - 10;
    let largura = div.offsetWidth - 10;
    div.style.width = largura + "px";
    div.style.height = altura + "px";
}