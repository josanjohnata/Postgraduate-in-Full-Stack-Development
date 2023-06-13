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