/*
 + adição
 - subtração
 * multiplicação
 / divisão
 % resto da divisão
*/

/*
console.log(10 + 3);
console.log(10 - 3);
console.log(30/3);
console.log(3*3);
console.log(13%3);
console.log(27%4);
let b = false;

let nome = 'Juliano'
console.log(`meu nome é ${nome}`);

console.log(`1==1 [${1==1}]`);
console.log(`1=='1' [${1=='1'}]`);
console.log(`1===1 [${1===1}]`);
console.log(`1==='1' [${1==='1'}]`);
console.log(`1!=1 [${1!=1}]`);
console.log(`1!='1' [${1!='1'}]`);
console.log(`1!=='1' [${1!=='1'}]`);
console.log(`1 > 1 (${1 > 1})`);
console.log(`2 > 1 (${2 > 1})`);
console.log(`1 >= 1 (${1 >= 1})`);
console.log(`2 >= 1 (${2 >= 1})`);
console.log(`2 < 1 (${2 < 1})`);
console.log(`1 < 2 (${1 < 2})`);
console.log(`1 <= 1 (${1 <= 1})`);
console.log(`2 <= 1 (${2 <= 1})`);
*/

// let ola = "Olá ";
// let mundo = "mundo!"
// let olamundo = ola + mundo;
// console.log(olamundo);

// let str = "Maçã, banana, abacaxi, uva";
// let part = str.slice(6, 12);
// console.log(part);

// str = '100 anos de "solidão"!';
// console.log(str.charAt(0));

// console.log(str.endsWith('Solidão!'));
// console.log(str);

// console.log(str.startsWith('100 anos de "solidão"!'));
// console.log(str.indexOf('"'));

// console.log("banana, jabuticaba e banana".indexOf('banana', 1));
// console.log("banana, jabuticaba e banana".lastIndexOf('banana'));
// console.log("banana, jabuticaba e banana".includes('abacaxi'));

// console.log('ab'.repeat(10));

// console.log("Python é legal. Eu adoro Python.".replace("Python", "JavaScript"))
// console.log("Python é legal. Eu adoro Python.".replaceAll("Python", "JavaScript"))
// console.log("Python é legal. Eu adoro Python.".replaceAll("o", ""))

// console.log('javascript'.toUpperCase());
// console.log('PYTHON'.toLowerCase());

// let nome = "Tiago Santos";
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// nome = 'tiago santos';
// let divided = nome.split(" ")
// console.log(divided);
// console.log(divided[0].slice(1));
// let tiago = divided[0].charAt(0).toUpperCase() + divided[0].slice(1);
// console.log(tiago);

// let stringComEspacos = "   um string com espaços   ";
// console.log(stringComEspacos.trim());
// console.log(stringComEspacos.trimStart());
// console.log(stringComEspacos.trimLeft());

// console.log(stringComEspacos.trimEnd());
// console.log(stringComEspacos.trimRight());

// const x = 3;
// const NUM = 2;

// if(x > NUM){
//     console.log(`x é maior que ${NUM}`);
// } else if (x == NUM){
//     console.log(`x é igual a ${NUM}`);
// } else{
//     console.log(`x é menor que ${NUM}`);
// }

//Falsy -> avaliado como false
//Truthy -> avaliado como true

// if(false){
//     console.log("Nunca vai entrar aqui");
// }

// if(undefined){
//     console.log("Nunca vai entrar aqui");
// }

// if(null){
//     console.log("Nunca vai entrar aqui");
// }

// if(0){
//     console.log("Nunca vai entrar aqui");
// }

// if(NaN){
//     console.log("Nunca vai entrar aqui");
// }

// if(""){
//     console.log("Nunca vai entrar aqui");
// }

// const n = 1 * 'a';
// console.log(!" ");

// let y = 11;
// console.log(y == 10 ? "sim" : 'não');

// if(y == 10){
//     console.log("sim");
// }else{
//     console.log("não");
// }


// //NOT, AND E OR (NÃO, E e OU)
// //!, &&, ||

// let z = 11;
// y = 11;
// let w = -1;

// console.log(!!1);

// console.log(y > 10 && z > 11 || w == -1);

// if(y > 10 && z > 11 || w == -1){
//     console.log("Aqui");
// }else{
//     console.log("Embaixo");
// }

//let n = 0;
//if (n == 0) console.log('n é igual zero');

// const fruta = 'Jabuticaba';

// switch (fruta) {
//     case 'Laranja':
//         console.log('Preço 3.00');
//         break;
//     case 'Banana':
//         console.log('Preço 4.00')
//         break;
//     case 'Morango':
//         console.log('Preço 20.00');
//         break;
//     case 'Limão':
//     case 'Abacaxi':
//         console.log('Preço 2.99');
//         break;
//     default:
//         console.log('Fruta inválida');
// }

// if (fruta === 'Laranja') {
//     console.log('Preço 3.00');
// } else if (fruta === 'Banana') {
//     console.log('Preço 4.00');
// } else if (fruta === 'Morango') {
//     console.log('Preço 20.00');
// } else if (fruta === 'Limão' || fruta === 'Abacaxi') {
//     console.log('Preço 2.99');
// } else {
//     console.log('Fruta inválida');
// }

// let n = 1;
// n++; //pós-fixado
// ++n; //pré-fixado
// console.log(n);
// console.log(n++);
// console.log(n);

// let c = 1;
// c += 1;
// console.log(c);
// c += 3;
// console.log(c);

// let d = 1;
// d = d + 1;
// d = d + 3;
// console.log(d);

// d -= 1;
// d -= 2;
// console.log(d);

// d *= 2;
// console.log(d);

// d /= 2;
// console.log(d);

// d = d**2;
// console.log(d);

for (let i=0; i<=10; i++){
    console.log(i);
}

let i=0;
while(i<=10){
    console.log(i);
    i = i + 1;
}

//1. Imprimir de 10 a 0
for (let i=10; i>=0; i--){
    console.log(i);
}

i = 5;
while(i>=0){
    console.log(i);
    i = i - 1;
}

i = 1;
do{
    console.log('dowhile ' + i);
    i++;
}while(i<=10);

i = 5;
do{
    console.log('dowhile ' + i);
    i--;
}while(i>=1);


i = -9000;
do{
    console.log('dowhile ' + i);
    i--;
}while(i>=1);


i = 11;
do{
    console.log('dowhile ' + i);
    i++;
}while(i<=10);


for(let i=1; i<=10; i++){
    if(i%2 === 0){
        continue
    }
    console.log(i);
}

for(let i=1; i<=10; i++){
    if(i === 6){
        break
    }
    console.log(i);
}

//for-of

let a = [1,2,3,4, "Loucura", 1.3, ['a', 'b']];
for(let v of a){
    console.log(v);
}
let [x,y] = [4,5];

for(let [i, v] of a.entries()){
    console.log(`${i} : ${v}`);
}

//a['c'] = 'caju';
//console.log(a.c);

for(let index in a){
    console.log(a[index]);
}

a.globo = 'terminal';
a['cachorro'] = "São Bernardo";
//a.cachorro = "São Bernardo";

for(let index in a){
    console.log(index);
}

let carro = {};
carro.marca = "Fiat"
carro.modelo = "Uno"
carro.ano = 2015
console.log(carro);

console.log(carro.ano)
carro.ano = 2016
console.log(carro.ano)

carro.cor = 'preto'
console.log(carro);

console.log(carro['cor'])

carro['ano-venda'] = 2017;
console.log(carro);

for (v in carro){
    console.log(v + " : " + carro[v]);
}

for ([key, v] of Object.entries(carro)){
    console.log(key + " " + v);
}

for (key of Object.keys(carro)){
    console.log(key + " " + carro[key]);
}

for (value of Object.values(carro)){
    console.log(value);
}