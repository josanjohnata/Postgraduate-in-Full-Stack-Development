// Sobrecarga de métodos
/*
 * Em uma classe Java, podemos criar métodos com o mesmo nome se diferirem em parâmetros.
 * 
 * Exemplo:
 * void som() {...}
 * void some(int a) {...}
 * float soma(double a, double b) {...}
 * float soma(int a, float b) {...}
 * 
 * Podemos ter um conjunto de MÉTODOS COM O MESMO NOME que realizam o mesmo tipo de operação sobre ARGUMENTOS DIFERENTES.
 */
class Draw {
  // método sem parâmetro
  public void show() {
    for(int i=0; i<10; i++) {
      System.out.println("*");
    }
  }

  // método com um parâmetro
  public void show(char simb) {
    for(int i=0; i<10; i++) {
      System.out.println(simb);
    }
  }

  // método com dois parâmetro
  public void show(char simb, int n) {
    for(int i=0; i<n; i++) {
      System.out.println(simb);
    }
  }
}

class Main {
  public static void main(String[] args) {
    Draw d1 = new Draw();
    d1.show();
    d1.show('#');
    d1.show('@', 5);
  }
}
