//Async Await
//Define funções assíncronas
//syntatic sugar para promises

function resolverDepoisDe2Segundos(x){
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(x)}, 2000);
    })
}

async function adicionar(x){
    let a = resolverDepoisDe2Segundos(10);
    let b = resolverDepoisDe2Segundos(20);
    return x + await a + await b;
}

console.log(adicionar(10).then((v)=>console.log(v)));

async function exibe(){
    let v = await adicionar(1);
    console.log(v);
}

exibe();