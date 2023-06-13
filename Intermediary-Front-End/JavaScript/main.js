// Variáveis
console.log('Hello world!');
var a = 10;
var b = 20;
var total = a + b;
console.log(total);

var nomePessoal = "Josan";
console.log(nomePessoal);

let book = "A litter prince"

const PI = 3.14;
// ----------------------------------------------------------------

// Tipos de dados e operadores
let nulo = null;
let indefinido = undefined;
let texto = "string";
let numero = 123;
let objeto1 = {};
let objeto2 = new Object();
let objeto3 = [];
let objeto4 = new Array();
let booleano = true;
// A função typeof() te auxilia a identificar o tipo de dados
console.log(typeof(nulo));
console.log(typeof(indefinido));
console.log(typeof(texto));
console.log(typeof(numero));
console.log(typeof(objeto1));
console.log(typeof(objeto2));
console.log(typeof(objeto3));
console.log(typeof(objeto4));
console.log(typeof(booleano));

// Strings

let name = 'Josan Johnata';
let lengthName = name.length;

console.log(lengthName);

const result = lengthName > 10 ? 'Obrigado!' : 'Por favor preencha seu nome completo.';
console.log(result);

const nameUpperCase = name.toUpperCase();
console.log(nameUpperCase);

const game = 'Barcelona vs Real Madrid';
const positionWord = game.indexOf('Real');
console.log(positionWord);

const sentenceCut = game.slice(0, 8);
const sentenceCut2 = game.slice(13);
console.log(sentenceCut);
console.log(sentenceCut2);

const thereAreWord = game.includes('Real');
console.log(thereAreWord);

const string1 = 'Hello, ';
const string2 = 'world!';
const concatStrings = string1.concat(string2);
console.log(concatStrings);

const removeSpaceBeforeAndAfterSentence = '  Remove todos os espaços antes e depois da frase  ';
console.log(removeSpaceBeforeAndAfterSentence.trim());

const numbers = '1,2,3,4,5,6,7,8,9';
const changeToArray = numbers.split(',');
console.log(changeToArray);
