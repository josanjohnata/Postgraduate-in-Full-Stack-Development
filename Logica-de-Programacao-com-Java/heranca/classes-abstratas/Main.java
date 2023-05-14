// Classes abstratas
/*
 * Não pode ser instanciada
 * 
 * Considere uma classe chamada Animal
 * - Essa classe possui subclasses (Cachorro, Leão e Cavalo)
 * - O som que cada animal emite é diferente de um para o outro
 * - Podemos criar um método abstrato chamado SOM
 * - Isso obriga as subclasses a implementarem este método
 */
class Main {
  public static void main(String[] args) {
    Account ac = new Savings();
    ac.setBalance(5000);
    ac.printStatement();
  }
}
