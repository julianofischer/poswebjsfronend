function incrementa(){
    //console.log("incrementa clicked");
    const p = document.getElementById("counter");
    let value = parseInt(p.innerHTML);
    value = value + 1;
    p.innerHTML = value;
}

function decrementa(){
    const p = document.getElementById("counter");
    let value = parseInt(p.innerHTML);
    value = value - 1;
    p.innerHTML = value;
}

function reseta(){
    document.getElementById("counter").innerHTML = 0;
}