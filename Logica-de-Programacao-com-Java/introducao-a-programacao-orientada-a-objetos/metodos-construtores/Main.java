// Métodos construtores
/*
 * - Construtor é um método carregado quando o objeto é criado.
 * - Possui o mesmo nome que a classe.
 * - Não retornam valores.
 * 
 * Podem ser:
 * - Sem parâmetros (construtor padrão)
 * - Parametrizados
 * - Sobrecarregados
 */
class Main {
  public static void main(String[] args) {
    Dog puppy = new Dog();
    puppy.Walk();

    Dog dogData = new Dog("Nina", 6);
    dogData.DogData();
  }
 }