// Conceitos de herança
/*
 * Diferentes classes podem se relacionar entre si, criando/compondo novos tipos de objetos.
 * 
 * Quando falamos de herança estamos falando de reutilização de código
 * - uma nova classe é criada absorvendo atributos de uma classe já existente
 * 
 * Exemplo:
 *                                       animais
 *              vertebrados                               invertebrados
 * répteis - peixes - anfíbios - pássaros   |  protozoários - insetos - crustáceos
 * 
 * Existem dois conceitos de classes que são as SUBCLASSE e a SUPERCLASSE:
 * Chamaremos de SUBCLASSE a classe que herda da classe pai, chamaremos de SUPERCLASSE a classe que vai gerar uma classe filha
 * 
 * Quando temos herança, temos a ideia de "é um(a)..."
 * Dizemos então que o relacionamento de Herança define um relacionamento do tipo "é um":
 * - "Mountain Bike É UMA bicicleta"
 * - "Moto É UM veículo"
 * - "Caminhão É UM veículo"
 */
class Main {
  public static void main(String[] args) {
    Person p = new Person();
    p.name = "John";
    // p.commission = 8.5;

    Seller s = new Seller();
    s.name = "Eide";
    s.commission = 8.5;

    System.out.println(s.name);
  }
}
