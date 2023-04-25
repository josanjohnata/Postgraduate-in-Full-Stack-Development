// > Maior que - verdadeiro se o operador da esquerda for maior do que o da direita (x > y)
// < Menor que - verdadeiro se o operador da esquerda for menor do que o da direita (x < y)
// == Igual a - verdadeiro se ambos os operando forem iguais (x == x)
/* != Diferente de - verdadeiro se os operandos não forem iguais(x != y)*/
// >= Maior ou igual a - verdadeiro se o operador da esquerda for maior ou igual ao da direita (x >= y)
// >= Menor ou igual a - verdadeiro se o operador da esquerda for menor ou igual ao da direita (x <= y)
// && AND - verdadeiro se ambos os operandos forem verdadeiros (x && y)
// || OR - verdadeiro se algum dos operandos forem verdadeiros (x || y)
/* ! NOT - verdadeiro se o operador for falso (!x)*/

class Main {
  public static void main(String[] args) {
    int a, b, c;
    Boolean d;
    a = 4;
    b = 8;
    c = 2;
    d = true;

    System.out.println(a > b);
    System.out.println(a < b);
    System.out.println(a == b);
    System.out.println(a != b);
    System.out.println(a >= b);
    System.out.println(a <= b);
    System.out.println(a < b && b > c);
    System.out.println(a > b || c < a);
    System.out.println(!d);
  }
}
