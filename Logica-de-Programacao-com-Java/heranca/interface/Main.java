// Interface
/*
 * Estrutura/sintaxe de programação que permite ao computador impor certas propriedades em um objeto (classe)
 * 
 * Considere uma classe chamada Veículo com as subclasses Carro, Moto e Caminhão
 * - Cada uma destas classes podem ter quantos métodos forem necessários
 * - Cada classe pode ter qualquer tipo de método
 * - Mas todas as classes devem ter, obrigatoriamente, uma ação de ligar o motor
 * - O "como" cada motor é iniciado, ficará para ser implementado direto em suas classes
 */
class Main {
  public static void main(String[] args) {
    Account ac = new Savings();
    ac.deposit(5000);
    ac.withdraw(400);
    ac.getBalance();
  }
}
