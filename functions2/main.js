function soma(a, b){
    return a + b;
}

let s = soma(10, 3);
console.log('resultado da soma ' + s);

function multiplica(a, b){
    let m = a * b;
    console.log('m ' + m);
    return m;
}
//console.log(m);

const x = function(a, b){
    return a + b;
}
console.log(x(1, 3));
const y = x;
console.log(y(1, 3));

let math_ops = {
    sum: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mult: function (a, b){
        return a * b;
    },
    div: function (a, b){
        return a/b;
    }
}

let vsoma, subtracao, multiplicacao, divisao;
vsoma = math_ops.sum(1,3);
subtracao = math_ops.sub(3, 1);
multiplicacao = math_ops.mult(10, 3);
divisao = math_ops.div(10, 3.0);
//math_ops.div.id = -1;
//console.log('id da função: ' + math_ops.div.id);

console.log(`${vsoma}, ${subtracao}, ${multiplicacao}, ${divisao}`)

vsoma = math_ops['sum'](1, 3)
subtracao = math_ops['sub'](3, 1);
multiplicacao = math_ops['mult'](10, 3);
divisao = math_ops['div'](10, 3.0);
console.log(`(${vsoma}, ${subtracao}, ${multiplicacao}, ${divisao})`)

function f(a, b, ...args){
    console.log(args);
}
f(1,2,3,4,5,6)

//rest params -> parâmetros rest
function soma_rest(...args){
    let s = 0;
    for(i of args){
        s = s + i;
    }
    console.log('soma rest: ' + s);
}
soma_rest(1,2);

//DEFAULT PARAMETERS
function fdefault(a, b, c=10){
    console.log(a + b + c);
}
fdefault(1,2);


//GENERATORS
function* generator(){
    let index = 0;
    while(index < 50){
        yield ++index;
    }
}
const gen = generator();
console.log('generator: ' + gen.next().value);
console.log('generator: ' + gen.next().value);
console.log('generator: ' + gen.next().value);
console.log('generator: ' + gen.next().value);
console.log('generator: ' + gen.next().value);
console.log('generator: ' + gen.next().value);

const gen2 = generator();
let value;
do{
    value = gen2.next().value;
    console.log(value);
}while(value);

var adder = new Function('a', 'b', 'return a + b');
console.log('adder: ' + adder(1,3));
console.log('adder: ' + adder(10,3));
console.log('adder: ' + adder(13,3));

//ARROW FUNCTIONS
let arrow = (a, b) => {
    let x = a + b;
    return x;
}
console.log('Resultado da arrow 1: ' + arrow(10,3));

arrow = (a, b) => {return a + b}
console.log('Resultado da arrow 2: ' + arrow(10,3));

arrow = (a, b) => a + b
console.log('Resultado da arrow 3: ' + arrow(10,3));

arrow = (a, b) => console.log(a + b)
console.log('Resultado da arrow 4: ' + arrow(10,3));

arrow = (a,b) => { a + b }
console.log('Resultado da arrow 5: ' + arrow(10,3));

arrow = (single) => single * 2
console.log('Resultado da arrow 6: ' + arrow(3));

arrow = single => single * 2
console.log('Resultado da arrow 7: ' + arrow(3));

arrow = () => -1
console.log(arrow());

arrow = _ => console.log('_ : ' + _);
console.log(arrow(1));

arrow = (value) => ({foo: value})
console.log("ob.foo: " + arrow(10).foo);


let arrow_rest = (p1, p2, ...r) => {
    console.log(`p1 ${p1}, p2 ${p2}, r ${r}, `);
}
arrow_rest(1,2,3,4,5,6);

let arrow_def = (p1=1, p2=2) => p1 + p2
console.log(arrow_def(3,3));
console.log(arrow_def(3));
console.log(arrow_def());


function Pessoa(){
    this.idade = 0;

    setInterval(function growUp(){
        console.log(this.idade);
        this.idade++;
    }, 1000);
}

//let p = Pessoa();

function Pessoa2(){
    let that = this;
    that.idade = 0;
    setInterval(function growUp(){
        that.idade = that.idade + 1;
        console.log(that.idade);
    }, 1000);
}

//let p = Pessoa2();

function Pessoa3(){
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

const p3 = new Pessoa3();