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

// Avançando com Arrays
// slice()
let peopleArray = ['John', 'Eide', 'Ester', 'Milk'];
let newPeopleArray= peopleArray.slice(1, 3);
console.log(peopleArray);
console.log(newPeopleArray);

// concat()
let friendsArray = ['Jack', 'Nina', 'Black', 'Pérola'];
let familyArray = peopleArray.concat(friendsArray);
console.log(familyArray);

// Filter()
let numbersToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultToFilter = numbersToFilter.filter(item => item % 2 === 0);
console.log(resultToFilter); // resultado: [2, 4, 6, 8, 10]

let filteredNumbers = numbersToFilter.filter(
  function (value) {
    return value > 5;
  }
);
console.log(filteredNumbers); // Resultado [6, 7, 8, 9, 10]

function getValues (value) {
  return value < 5;
}

let returnedNumbers = numbersToFilter.filter(getValues);
console.log(returnedNumbers); // Resultado [1, 2, 3, 4]

const r1 = returnedNumbers.filter((value) => {
  return value > 5;
});
console.log(r1); // Resultado [6, 7, 8, 9, 10]

const employees = [
  { name: "John", age: 30, salary: 5000 },
  { name: "Mary", age: 28, salary: 4500 },
  { name: "Peter", age: 35, salary: 6000 },
  { name: "Ann", age: 32, salary: 5500 },
  { name: "Carlos", age: 40, salary: 7000 }
];

let employeeList = employees.filter(
  function(value) {
    console.log(value.name);
  }
);

// Map()
let numbersToMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = numbersToMap.map((value) => {
  return value * 3
});
console.log(num); // Resultado [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

const employeesToMap = [
  { name: "John", age: 30, salary: 5000 },
  { name: "Mary", age: 28, salary: 4500 },
  { name: "Peter", age: 35, salary: 6000 },
  { name: "Ann", age: 32, salary: 5500 },
  { name: "Carlos", age: 40, salary: 7000 }
];

let employeeName = employeesToMap.map(person => person.name);
console.log(employeeName); // Resultado: ['John', 'Mary', 'Peter', 'Ann', 'Carlos']

// Reduce()
let total = 0;
let numeros = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < numeros.length; i++) {
  total += numeros[i];
}
console.log(total); // Resultado: 28

let numeros2 = [1, 2, 3, 4, 5, 6, 7];
let total2 = numeros2.reduce(function(total, numero){
  return total + numero
}, 0)
console.log(total2); // Resultado: 28

//ForEach()
let dozens =  [10, 20, 30, 40, 50, 60];
let total = 0;

for (let value of dozens) {
  console.log('For', value);
}

dozens.forEach(value => console.log('ForEach', value));

dozens.forEach(value => {
  total += value;
})
console.log(total);

dozens.forEach(function(_value, index, array) {
  console.log(array[index]);
})

// Funções
function multiplicar (a, b) {
  return a * b;
}

let x = multiplicar(2, 3);
console.log(x); // Resultado: 6

function funcao(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao(2); // Resultado: 8

// Quando não souber quantos e/ou quais argumentos a função deve receber:
function funcWithoutArgs(...args) {
  console.log(args);
}
funcWithoutArgs(1, 2, 3, 4, 5, 6) // Resultado: [1, 2, 3, 4, 5, 6]

// Objetos
let person = {
  name: 'Josan',
  lastName: 'Johnata',
}

console.log(person['lastName']);
console.log(person.lastName);

let person1 = new Object();
person1.name = 'Ester';
person1.lastName = 'Pontes';
person1.speakName = function() {
  console.log('Nome é', this.name);
};
person1.speakName();
console.log(person1.name);
console.log(person1.lastName);

function createPerson(name, lastName) {
  return {name, lastName};
};
let p1 = createPerson('Eide', 'Maranhão');
let p2 = createPerson('Milk', 'Conhonho');

console.log(p1);
console.log(p2);

// Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  speak() {
    console.log('Hello,', this.firstName);
  }

  get fullName() {
    console.log('hello,', this.firstName, this.lastName);
  }
}

p1 = new Person('Josan', 'Johnata')
p1.speak();
p1.fullName;

// Herança
class ElectronicDevice {
  constructor(name) {
    this.name = name;
    this.connected = false;
  }

  toConnect() {
    if(this.connected) {
      console.log('It is already on!');
      return;
    }
    this.connected = true;
  }
}

class SmartPhone extends ElectronicDevice {
  constructor(name, color, model) {
    super(name);
    this.color = color;
    this.model = model;
  }
}

let s1 = new SmartPhone('Samsung', 'Black', 'S20 FE');
console.log(s1);
s1.toConnect();
s1.toConnect();
