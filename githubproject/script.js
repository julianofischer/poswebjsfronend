function cleanDiv(div){
    div.innerHTML = ''
}

function construct(json, url){
    let div = document.getElementById("column");
    cleanDiv(div);
    if(json.message){
        let errorP = document.createElement("p");
        errorP.classList.add('error');
        let innerText = document.createTextNode(`Erro <${json.message}>`);
        errorP.appendChild(innerText)
        div.appendChild(errorP);
    }else{
        let nameP = document.createElement("p");
        let innerText = document.createTextNode(json.login);
        nameP.appendChild(innerText)
        div.appendChild(nameP);

        fetch(json.avatar_url)
        .then(imgResp => imgResp.blob())
        .then(blob => URL.createObjectURL(blob))
        .then((url)=>{
            let img = document.createElement("img");
            img.src = url;
            div.appendChild(img);
        });
    }
}

function loadData(){
    let username = document.getElementById("login").value;
    fetch(`https://api.github.com/users/${username}`)
    .then((resp) => resp.json())
    .then((json) => construct(json));
}