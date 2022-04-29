intervalId = null;

function aumentar(){
    clearInterval(intervalId);
    intervalId = setInterval(doIncrease, 50);
}

function doIncrease(){

    const sq = document.getElementById('square');
    let width = sq.offsetWidth;
    let height = sq.offsetHeight;
    sq.style.width = width + 10 + "px";
    sq.style.height = height + 10 + "px";
}

function diminuir(){
    clearInterval(intervalId);
    intervalId = setInterval(doDecrease, 50);
}

function doDecrease(){
    const sq = document.getElementById('square');
    let width = sq.offsetWidth;
    let height = sq.offsetHeight;
    sq.style.width = width - 10 + "px";
    sq.style.height = height - 10 + "px";
}