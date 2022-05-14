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

function montar(json, url){
    limparResults();
    const p = document.createElement("p");
    const text = document.createTextNode(json.login);
    p.appendChild(text);
    const div = document.getElementById("resultados");
    div.appendChild(p);
    const img = document.createElement("img");
    img.src = url;
    div.appendChild(img);
}

async function busca(){
    const inputValue = document.getElementById("login").value;
    const resp = await fetch(`https://api.github.com/users/${inputValue}`);
    const json = await resp.json();
    const respImg = await fetch(json.avatar_url);
    const blob = await respImg.blob();
    const url = URL.createObjectURL(blob);
    montar(json, url);  
}

function limparResults(){
    const div = document.getElementById("resultados");
    div.innerHTML = '';
}