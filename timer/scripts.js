function chamarEvento(e){
    const btn = e;
    console.log(btn.innerHTML);
    if(btn.innerHTML.trim() == "Iniciar"){
        iniciar();
    }else if (btn.innerHTML.trim() == "Pausar"){
        pausar();
    }else if(btn.innerHTML.trim() == "Parar"){
        parar();
    }
}

function changeTime(){
    const p = document.getElementById("timer");
    const value = p.innerHTML;
    //let mins = parseInt(value.split(":")[0], 10);
    //let segs = parseInt(value.split(":")[1], 10);
    let [mins, segs] = value.split(":").map((num) => parseInt(num, 10));
    segs = segs + 1;
    if (segs == 60){
        mins = mins + 1;
        segs = 0;
    }
    p.innerHTML = `${String(mins).padStart(2, '0')}:${String(segs).padStart(2,0)}`
}

function iniciar(){
    console.log("iniciar");
    intervalId = setInterval(changeTime, 1000);
}

function pausar(){
    console.log("pause");
    clearInterval(intervalId);
}

function parar(){
    console.log("pare");
    clearInterval(intervalId)
    const p = document.getElementById("timer").innerHTML = "00:00"
}