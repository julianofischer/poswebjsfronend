function aumentar(){
    const sq = document.getElementById('square');
    let width = sq.offsetWidth;
    let height = sq.offsetHeight;
    sq.style.width = width + 10 + "px";
    sq.style.height = height + 10 + "px";
}