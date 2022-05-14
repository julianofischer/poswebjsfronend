function soma(a, b) {
    return a + b;
}
let s = soma(10, 20);
console.log(s);


function multiplica(a, b) {
    //variáveis declaradas dentro de uma função são locais
    let m = a * b;
    //posso usar m aqui
    console.log(m);
    return m;
}
// mas não posso usar m aqui

//function expression

let x = function (a, b) {
    return a + b;
}

s = x(3, 5);
console.log('Resultado da invocação x: ' + s);
y = x;
s = y(3, 5);
console.log('Resultado da invocação y: ' + s);

let math_ops = {
    sum: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mult: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    }
}
let sum, sub, mult, div;
sum = math_ops.sum(10, 3); // OU math_ops['sum']()
sum = math_ops['sum'](10, 3);
console.log('Resultado da soma: ' + sum);

sub = math_ops.sub(10, 3); // OU math_ops['sum']()
sub = math_ops['sub'](10, 3);
console.log('Resultado da sub: ' + sub);

mult = math_ops.mult(10, 3); // OU math_ops['sum']()
mult = math_ops['mult'](10, 3);
console.log('Resultado da mult: ' + mult);

div = math_ops.div(10, 3.0); // OU math_ops['sum']()
div = math_ops['div'](10, 3.0);
console.log('Resultado da div: ' + div);

//REST PARAMETERS
function f(a, b, ...args) {
    console.log(args);
}
f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//DEFAULT PARAMETERS
function fdefault(a, b, c = 10) {
    return a + b + c;
}
console.log('Resultado da fdefault: ' + fdefault(1, 2, 3));
console.log('Resultado da fdefault: ' + fdefault(1, 2));


//GENERATORS
function* generator(i) {
    yield i;
    yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value);
// expected output: 10
console.log(gen.next().value);
// expected output: 20


function* generator2() {
    var index = 0;
    while (true)
        yield index += 10;
}
const gen2 = generator2();
console.log(gen2.next().value);
// expected output: 10
console.log(gen2.next().value);


//FUNCTION INSTANCES
var adder = new Function('a', 'b', 'return a + b');
console.log('Resultado da adder: ' + adder(10, 3));


//ARROW FUNCTIONS 
let arrow = (a, b) => {
    let x = a + b;
    return x;
}
console.log('Resultado da arrow 1 ' + arrow(10, 3));

arrow = (a, b) => { return a + b }
console.log('Resultado da arrow 2 ' + arrow(10, 3));

arrow = (a, b) => a + b
console.log('Resultado da arrow 3 ' + arrow(10, 3));

//OBSERVAÇÃO --> retorna undefined (porque não retorna nada!)
arrow = (a, b) => { a + b }
console.log('Resultado da arrow 3 ' + arrow(10, 3));

arrow = singleParam => singleParam * 2
console.log('Resultado da singleParam: ' + arrow(13));

//noparams
arrow = () => 13
console.log('Resultado da no param: ' + arrow());

//SINTAXE AVANÇADA
// Envolva o corpo da função em parênteses para retornar uma expressão literal de objeto:
arrow = (value) => ({ foo: value })
//retorna  {foo: 26}
console.log(arrow(26).foo);

// Parâmetros rest (rest parameters) são suportados
let frest = (param1, param2, ...rest) => {
    console.log(`param1: ${param1}, param2: ${param2}, restparams: ${rest}`)
}
frest();

//parâmetros padrões (default parameters) são suportados
fdef = (param1 = 1, param2 = 2) => param1 + param2
console.log('fdef: ' + fdef());
console.log('fdef: ' + fdef(10));
console.log('fdef: ' + fdef(10, 3));


//2 fatores influenciaram a introdução de arrow functions
// 1. funções mais curtas
// 2. inexistência da palavra chave this
//SEM THIS SEPARADO

function Pessoa() {
    // O contrutor Pessoa() define `this` como uma instância dele mesmo.
    this.idade = 0;

    setInterval(function growUp() {
        // Em modo não estrito, a função growUp() define `this`
        // como o objeto global (porque é onde growUp() é executado.),
        // que é diferente ao `this`
        // definido pelo construtor Person().
        console.log(this.idade);
        this.idade++;
    }, 1000);
}

var p = new Pessoa();

//WORKAROUND
function Pessoa2() {
    var that = this
    that.idade = 0;

    setInterval(function growUp() {
        // Em modo não estrito, a função growUp() define `this`
        // como o objeto global (porque é onde growUp() é executado.),
        // que é diferente ao `this`
        // definido pelo construtor Person().
        console.log(that.idade);
        that.idade++;
    }, 1000);
}
let p2 = new Pessoa2();
/* Uma arrow function não tem seu próprio this;
o valor this do contexto léxico encapsulado é usado.
Ex: Arrow functions seguem as regras normais de
pesquisa de variáveis. Então, ao procurar por this,
que não está no escopo atual elas acabam encontrando
this no escopo encapsulado. Assim, no código a seguir,
o this dentro da função que é passado para setInterval
tem o mesmo valor do this na função lexicamente encapsulada.*/

function Pessoa3(){
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| corretamente se refere ao objeto Person
    }, 1000);
  }
  
  var p3 = new Pessoa3();

/* Uso da palavra chave yield
A palavra chave yield não pode ser usada
no corpo de uma arrow function (exceto
quando permitido dentro de funções aninhadas
dentro delas). Como consequência, arrow
functions não podem ser usadas como
geradoras (generators). */