//PROMISES
/* Promise é um objeto usado para processamento
 * assíncrono. Um Promise (de "promessa")
 * representa um valor que pode estar disponível
 * agora, no futuro ou nunca. */

/* Uma Promise representa um proxy para um
 * valor que não é necessariamente conhecido
 * quando a promessa é criada. Isso permite
 * a associação de métodos de tratamento para
 * eventos da ação assíncrona num caso eventual
 * de sucesso ou de falha. Isto permite que
 * métodos assíncronos retornem valores como
 * métodos síncronos: ao invés do valor final,
 * o método assíncrono retorna uma promessa ao
 * valor em algum momento no futuro. */

/* Um Promise está em um destes estados: 
 * pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
 * fulfilled (realizada): sucesso na operação.
 * rejected (rejeitado):  falha na operação. */

/* Uma promessa pendente pode se tornar realizada
 * com um valor ou rejeitada por um motivo (erro).
 * Quando um desses estados ocorre, o método then
 * do Promise é chamado, e ele chama o método de
 * tratamento associado ao estado (rejected ou resolved).
 * Se a promessa foi realizada ou rejeitada quando o
 * método de tratamento correspondente for associado,
 * o método será chamado, desta forma não há uma condição
 * de competição entre uma operação assíncrona e seus
 * manipuladores que estão sendo associados. */

const promise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 2);
    if (num == 1) {
        resolve(num);
    } else {
        reject(num);
    }
});

promise.then((num) => {
    console.log('Alguma coisa deu certo: ' + num);
}).catch(num => {
    console.log('Alguma coisa deu errado: ' + num)
});
console.log('O código é assíncrono!');

const uma_promise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 2);
    if (num == 1) {
        resolve(num);
    } else {
        reject("Deu errado na primeira promise");
    }
});

uma_promise.then((num)=>{
    console.log("Primeiramente deu certo =) : " + num);
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 2);
        /* if (num == 1) {
            resolve(num);
        } else {
            reject('Deu erado na segunda promise');
        }*/
        resolve(num);
    });
}).then((value)=>{
    console.log("Deu certo também: " + value);
    return value
})
.catch((error) =>{
    console.log("Deu errado em algum lugar: " + error);
    //return num;
});