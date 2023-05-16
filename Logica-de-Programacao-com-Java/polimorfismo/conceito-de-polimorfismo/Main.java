// Conceito de Polimorfismo
/*
 * O Polimorfismo nos permite programar genericamente ao invés de programar especificamente
 * É possível fazer com que objetos se comportem de maneira adequada automaticamente
 */
class Main {
  public static void main(String[] args) {
    Square s1 = new Square();
    s1.draw();

    Circle c1 = new Circle();
    c1.draw();
  }
}
