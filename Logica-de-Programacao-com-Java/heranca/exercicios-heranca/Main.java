// Exemplo prático com herança
/*
 * Vamos trabalhar um exemplo prático usando muito do que vimos até agora sobre herança.
 */
class Main {
  public static void main(String[] args) {
    Dog d = new Dog();
    d.setName("Nina");

    Cat c = new Cat();
    c.setName("Milk");

    d.show();
    c.show();
  }
}
