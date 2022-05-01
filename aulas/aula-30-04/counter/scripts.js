function incrementa(){
    const p = document.getElementById("contador");
    let valor = parseInt(p.innerHTML);
    //valor ++;
    //valor +=1;
    valor = valor + 1;
    p.innerHTML = valor;
    if(valor >= 0){
        p.classList.remove('negativo');
    }
}

function decrementa(){
    const p = document.getElementById("contador");
    let valor = parseInt(p.innerHTML);
    valor = valor - 1;
    p.innerHTML = valor;
    if(valor < 0){
        p.classList.add('negativo');
    }
}

function reseta(){
    const p = document.getElementById("contador");
    p.innerHTML = 0;
    p.classList.remove('negativo');
    //document.getElementById("contador").innerHTML = 0;
}