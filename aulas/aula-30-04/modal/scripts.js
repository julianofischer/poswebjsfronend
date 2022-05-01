var modal = document.getElementById("modal")
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
function mostraModal(){
    modal.style.display = "block";
}
btn.onclick = mostraModal;
fechaModal = function(){
    modal.style.display = "none";
}
var apelido = fechaModal;
span.onclick = apelido;
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}