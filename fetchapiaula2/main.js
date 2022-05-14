/* fetch("https://api.github.com/users/julianofischer")
    .then((resp) => resp.json())
    .then((json) => console.log(json.login));

async function mostrar(){
    let resp = await fetch("https://api.github.com/users/julianofischer");
    let json = await resp.json();
    console.log('mostrar: ' + json.id);
}

mostrar(); */

/*
function busca(){
    const inputValue = document.getElementById("login").value;
    fetch(`https://api.github.com/users/${inputValue}`)
        .then(resp => resp.json())
        .then(json => {
            fetch(json.avatar_url)
            .then(respImg => respImg.blob())
            .then(blob => URL.createObjectURL(blob))
            .then(url => montar(json, url));
        })
        
}*/

var toggle = true;
var intervalId = 0;
function montar(json, urls) {
    clearInterval(intervalId);
    limparResults();
    const p = document.createElement("p");
    const text = document.createTextNode(json.name);
    p.appendChild(text);
    const div = document.getElementById("resultados");
    div.appendChild(p);
    const img = document.createElement("img")
    div.appendChild(img);
    intervalId = setInterval(() => {
        if(toggle){
            img.src=urls[0];
        }else{
            img.src=urls[1];
        }
        toggle = !toggle;
    }, 250);
    /*for (let url of urls) {
        const img = document.createElement("img");
        img.src = url;
        div.appendChild(img);
    }*/
}

async function busca() {
    const inputValue = document.getElementById("login").value;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
    const json = await resp.json();
    const respImg = await fetch(json.sprites.front_default);
    const blob = await respImg.blob();
    const url = URL.createObjectURL(blob);
    const backImg = await fetch(json.sprites.back_default)
    const urlBack = URL.createObjectURL(await backImg.blob())
    montar(json, [url, urlBack]);
}

function limparResults() {
    const div = document.getElementById("resultados");
    div.innerHTML = '';
}