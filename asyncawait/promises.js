//Async Await
//Define funções assíncronas
//syntatic sugar para promises


function resolverDepoisDe2Segundos(x) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {resolve(x)}, 2000);
    });
}

async function adicionar1(x){
    let a = await resolverDepoisDe2Segundos(20);
    let b = await resolverDepoisDe2Segundos(30);
    return x + a + b;
}
//exibe 60 depois de 4 segundos
adicionar1(10).then((v)=>console.log(v));


async function adicionar2(x){
    let a = resolverDepoisDe2Segundos(20);
    let b = resolverDepoisDe2Segundos(30);
    return x + await a + await b;
}
//exibe 60 depois de 2 segundos
adicionar2(10).then((v)=>console.log('adicionar2: ' + v));

async function exibe(){
    let v = await adicionar2(50);
    console.log('dentro de exibe: ' + v);
}
exibe();