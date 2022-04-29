function increase(){
    const circle = document.getElementById('circle');
    let width = circle.offsetWidth;
    let height = circle.offsetHeight;
    circle.style.width = width + 10 + "px";
    circle.style.height = height + 10 + "px";
}