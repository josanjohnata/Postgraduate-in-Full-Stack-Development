// 1 - Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário.
function currentSalary(currentSalary, percent) {
  let readjustment; 

  readjustment = (currentSalary / percent) * 100;

  const newSalary = currentSalary + readjustment;
  console.log('O salário reajustado é: R$', newSalary);
};

currentSalary(1350, 10);

// 2 - Escreva um algoritmo que leia um número inteiro e que imprima o seu sucessor e seu antecessor.
function printNumber(number) {
  const successor = number + 1;
  const predecessor = number - 1;

  console.log('O número atual é:', number);
  console.log('O sucessor é:', successor);
  console.log('O antecessor é:', predecessor);
}

printNumber(10);

// 3 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuir e dos impostos (aplicados ao custo de fábrica).
// Supondo que o percentual do distribuidor seja de 28% e os impostos do 45%, escreva um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
function carValue(industryCost) {
  let distributeCost;
  let taxesCost;
  let carFinalValue;

  distributeCost = industryCost * 28/100;
  taxesCost = industryCost * 45/100;
  carFinalValue = industryCost + taxesCost + distributeCost;

  console.log('O custo final ao consumidor é:', carFinalValue);
}

carValue(40000);

// 4 - Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
// Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: mediaFinal = n1 * 2 + n2 * 3 + n3 * 5 / 10
function calcGrade(n1, n2, n3) {
  const mediaFinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
  console.log('A média ponderada é: ', mediaFinal);
}

calcGrade(5, 8, 9);

// 5 - Faça um algoritmo que leia quatro números informados pelo usuário e que depois imprima a média ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4.
function calcGrade2(n1, n2, n3, n4) {
  const mediaFinal = (n1 * 1 + n2 * 2 + n3 * 3 + n4 * 4) / 10;
  console.log('A média ponderada é: ', mediaFinal);
}

calcGrade2(5, 8, 9, 2);

// 6 - Para fazer uma promoção, os comerciantes estão procurando aumentar suas vendas oferecendo desconto. Faça um algoritmo que possa receber um valor de um produto e que escreva o novo valor tendo em vista que o desconto foi de 9%
function promotions(valueItem, discount) {
  const discountValue = valueItem * discount;
  const newPriceItem = valueItem - discountValue;

  console.log('O valor com desconto é:', newPriceItem);
}

promotions(35, 0.09);

// 7 - Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12 km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média.
// Utilizar as seguintes fórmulas "distância = tempo * velocidade" e "litros usados = distância / 12"
// O algoritmo deverá apresentar os valores da velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizados na viagem.

function amountGas(kmPerLiter, tripTime, averageSpeed) {
  const distance = tripTime * averageSpeed;
  const spentLitersGas = distance / kmPerLiter;

  console.log('A velocidade média foi:', averageSpeed, 'km/h');
  console.log('O tempo gasto na viagem foi:', tripTime, 'horas');
  console.log('A distância percorrida foi:', distance, 'km')
  console.log('O consumo de combustível foi:', spentLitersGas, 'litros.');
};

amountGas(12, 3, 80);

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

// Exercício: escreva uma função que recebe um array com todos os meses do ano e divida em trimestres:

function divideIntoQuarters(array) {
  const quarters = [];

  for (let i = 0; i < array.length; i += 3) {
    const quarter = array.slice(i, i + 3);
    quarters.push(quarter);
  }

  return quarters;
}

const monthsOfYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const quartersOfYear = divideIntoQuarters(monthsOfYear);
console.log(quartersOfYear);

// Exercício: crie uma lista com eletrodomésticos(produtos) com os seguintes dados, id, description e category
// Crie uma função para filtrar por categoria e retornar apenas Kitchen Appliances.

const appliances = [
  {
    id: 1,
    description: "Refrigerator",
    category: "Kitchen Appliances"
  },
  {
    id: 2,
    description: "Washing Machine",
    category: "Laundry Appliances"
  },
  {
    id: 3,
    description: "Microwave Oven",
    category: "Kitchen Appliances"
  },
  {
    id: 4,
    description: "Vacuum Cleaner",
    category: "Cleaning Appliances"
  },
  {
    id: 5,
    description: "Air Conditioner",
    category: "Climate Control Appliances"
  }
];

const returnedCategories = appliances.filter((products) => {
    return products.category === 'Kitchen Appliances';
  }
)

console.log(returnedCategories);

