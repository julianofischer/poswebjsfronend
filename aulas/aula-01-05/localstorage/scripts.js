const storage = localStorage;
let ultimo = storage["ultimo"];
document.getElementById(ultimo).classList.add("selected");
document.getElementById("altura").value = storage["altura"] ? storage["altura"] : ""
document.getElementById("peso").value = storage["peso"] ? storage["peso"] : ""

function calcula(){
    let altura = document.getElementById("altura").value;
    storage["altura"] = altura;
    let peso = document.getElementById("peso").value;
    storage["peso"] = peso;
    altura = parseFloat(altura);
    peso = parseFloat(peso);
    let imc = peso/(altura * altura);
    
    const trs = document.getElementsByTagName("tr");
    for (let tr of trs){
        tr.classList.remove("selected");
    }

    if(imc < 18.5){
        document.getElementById("magreza").classList.add("selected");
        storage["ultimo"] = "magreza";
    }else if (imc < 24.9){
        document.getElementById("normal").classList.add("selected");
        storage["ultimo"] = "normal";
    }else if (imc < 29.9){
        document.getElementById("sobrepeso").classList.add("selected");
        storage["ultimo"] = "sobrepeso";
    }else if (imc < 39.9){
        document.getElementById("obesidade").classList.add("selected");
        storage["ultimo"] = "obesidade";
    }else{
        document.getElementById("obesidade-grave").classList.add("selected");
        storage["ultimo"] = "obesidade-grave";
    }
}