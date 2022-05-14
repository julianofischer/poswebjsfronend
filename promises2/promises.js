//PROMISES
//PROMESSA: disponível agora, no futuro ou nunca

/*
 * pending: estado inicial
 * fullfiled: sucesso
 * rejected: falha
 * pending -> fullfiled -> resolved()
 * pending -> reject -> rejected()
*/

/*
const promise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 2);
    if (num == 1) {
        resolve(num);
    } else {
        reject(num);
    }
});


promise.then((num) => {
    console.log('Deu certo: ' + num);
}).catch(num => {
    console.log('Deu errado: ' + num);
});
console.log('O código é assíncrono.');*/


/*
const uma_promise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 2);
    if(num == 1){
        resolve(num);
    }else{
        reject('na primeira promise');
    }
});

uma_promise.then((num) => {
    console.log('Primeira promise deu certo =): ' + num);
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 2);
        if(num == 1){
            resolve(num);
        }else{
            reject('na segunda promise');
        }
    });
}).then((value) => {
    console.log('Segunda promise deu certo: ' + value);
    return value;
}).catch((error)=>{
    console.log('Deu errado em algum lugar: ' + error)
});*/

const entregador = new Promise((resolve, reject)=>{
    const tempo = Math.floor(Math.random() * 5)*1000;
    console.log('e 1');
    setTimeout(() => {
        console.log('entregador 1')
        resolve('entregador 1')
    }, tempo);
});

const entregador2 = new Promise((resolve, reject)=>{
    const tempo = Math.floor(Math.random() * 5)*1000;
    console.log('e 2');
    setTimeout(() => {
        console.log('entregador 2')
        resolve('entregador 2')
    }, tempo);
});

const entregador3 = new Promise((resolve, reject)=>{
    const tempo = Math.floor(Math.random() * 5)*1000;
    console.log('e 3');
    setTimeout(() => {
        console.log('entregador 3')
        resolve('entregador 2')
    }, tempo);
});

const entregador4 = new Promise((resolve, reject)=>{
    const tempo = Math.floor(Math.random() * 5)*1000;
    console.log('e 4');
    setTimeout(() => {
        console.log('entregador 4')
        resolve('entregador 2')
    }, tempo);
});

const entregador5 = new Promise((resolve, reject)=>{
    const tempo = Math.floor(Math.random() * 5)*1000;
    console.log('e 5');
    setTimeout(() => {
        console.log('entregador 5')
        resolve('entregador 2')
    }, tempo);
});