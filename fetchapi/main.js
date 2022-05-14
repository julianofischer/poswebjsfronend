/*
fetch("https://api.github.com/users/julianofischer")
.then((resp) => {
    console.log(resp);
})
.catch(()=>{
    console.log("não foi possível carregar");
});*/

function mostrarResposta(data){
    console.log(data);
    console.log('login: ' + data.login);
}

fetch("https://api.github.com/users/julianofischer")
.then(resp => resp.json())
.then(data => mostrarResposta(data))
.catch(()=>{
    console.log("não foi possível carregar");
});


async function showResponse(){
    let r = await fetch("https://api.github.com/users/julianofischer");
    let data = await r.json();
    console.log('showresponse' + data.login);
}

showResponse();
