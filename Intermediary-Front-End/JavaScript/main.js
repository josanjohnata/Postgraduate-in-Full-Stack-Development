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

// If, switch, for, while and Do while

// If/else
let country = 'Brazil';

if (!country === 'Brazil') {
  console.log('Você é estrangeiro!');
} else {
  console.log('Você é brasileiro!');
}

let age = 22;

if (age < 16) {
  console.log('Não vota!');
} else if (age < 18 || age > 65){
  console.log('Voto opcional!');
} else {
  console.log('Voto obrigatório!');
}

// Switch/case
const weekDay = 1;

switch (weekDay) {
  case 1:
  console.log("Domingo")
  break;

  case 2:
  console.log("Segunda-feira")
  break;

  case 3:
  console.log("Terça-feira")
  break;

  case 4:
  console.log("Quarta-feira")
  break;

  case 5:
  console.log("Quinta-feira")
  break;

  case 6:
  console.log("Sexta-feira")
  break;

  default:
  console.log("Sabadouu")

  break;
}

// For
let cars = [
  {modelo: 'Audio A3', marca: 'Audi', ano: 2020},
  {modelo: 'Palio', marca: 'Fiat', ano: 2010},
  {modelo: 'Corolla', marca: 'Toyota', ano: 2004}
]
for (let i = 0; i < 3; i++) {
  let car = cars[i].modelo;
  console.log(car);
}

// For/in
let cars2 = [
  {modelo: 'Audio A3', marca: 'Audi', ano: 2020},
  {modelo: 'Palio', marca: 'Fiat', ano: 2010},
  {modelo: 'Corolla', marca: 'Toyota', ano: 2004}
]
for (let i in cars2) {
  console.log(cars2[i].modelo);
}

// For/of
let cars3 = [
  {modelo: 'Audio A3', marca: 'Audi', ano: 2020},
  {modelo: 'Palio', marca: 'Fiat', ano: 2010},
  {modelo: 'Corolla', marca: 'Toyota', ano: 2004}
]
for (let car of cars3) {
  console.log(car.modelo);
}

// While
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Do/while
let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 10);

// Criando e manipulando Arrays
// Arrays
let values = [8, 3, 9, 0, 1, 2,];
console.log(values[3]);

for (let i = 0; i < values.length; i++) {
  console.log('Posição:', values[i]);
};

let carsArray = [];
carsArray[0] = "Volvo";
carsArray[1] = "Fiat";
carsArray[2] = "Toyota";

console.log(carsArray);

let motorcycles = new Array('BMW', 'Yamaha', 'Honda');
console.log(motorcycles);

// Exercício: calcular a media de todos os números de um array
let numbersCalc = [8, 3, 9, 0, 2, 2,];
function calculateNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
};

console.log(calculateNumbers(numbersCalc));

// Exercício: localizar o maior número do array
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

console.log(findMax(numbersCalc));

// Exercício: localizar o nome da cidade com maior número de carácteres
let citiesOfBrazil = ['Fortaleza', 'São Paulo', 'Rio de Janeiro', 'Alagoas']
function findCity(cities) {
  let max = 0;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].length > max) {
      max = cities[i].length;
      maxCity = cities[i];
    }
  }
  return maxCity;
};

console.log(findCity(citiesOfBrazil));

let arrTest = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('Array com .reverse() retorna o array invertido:', arrTest.reverse());
console.log('Array com .join() substitui o separador pelo valor passado:', arrTest.join('-'));
console.log('Array com .shift() remove o primeiro elemento do array:', arrTest.shift());
console.log('Array com .push(valor) adiciona um ou mais valores no final do array:', arrTest.push(99));
console.log('Array com .unshift(valor) adiciona um ou mais valores no inicio do array:', arrTest.unshift(31));
console.log('Array com .pop() remove o último elemento do array:', arrTest.pop());
console.log('Array com .indexOf(numeroDaPosição) retorna a posição do valor selecionado:', arrTest.indexOf(3));
console.log('Array com .length() retorna a quantidade de elementos do array:', arrTest.length());
console.log('Array com .sort() ordena o array do menor para o maior e de A a Z:', arrTest.sort());

// Splice()
let arraySplice = [1, 2, 3, 'hello world', 4.14, true]
arraySplice.splice(2, 1,);
arraySplice.splice(2, 0, 'teste');
console.log(arraySplice);

// Exercício: Criar um array com cinco nomes, Guilherme, Samuel, John, Ester e Eide.
// Acrescente o nome da Mônica, retire o último elemento do array,
// encontre a posição do Samuel e troque Eide por Milk.
let nameArray = ['Guilherme', 'Samuel', 'John', 'Ester', 'Eide'];
console.log(nameArray);
nameArray.push('Mônica');
console.log(nameArray);
nameArray.pop();
console.log(nameArray);
console.log('A posição do Samuel é:', nameArray.indexOf('Samuel'));
console.log(nameArray);
nameArray.splice(nameArray.indexOf('Eide'), 1, 'Milk');
console.log(nameArray);