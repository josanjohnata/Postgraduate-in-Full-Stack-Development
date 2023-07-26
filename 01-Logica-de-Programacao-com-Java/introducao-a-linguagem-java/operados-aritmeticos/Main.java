// Soma dois operandos -> + (x + y + 2)
// Subtrai o operando direito do esquerdo -> - (x - y - 2)
// Multiplica dois operandos -> * (x * y)
// Divide o operando esquerdo pelo direito (sempre resulta em flutuante) -> / (x / y)
// Módulo - resto da divisão do operando esquerdo pelo direito -> % (x % y (resto de x / y))

class Main {
  public static void main(String[] args) {
    double numA, numB, total;

    numA = 8;
    numB = 3;
    total = numA + numB;
    System.out.println(total);

    numA = 8;
    numB = 3;
    total = numA - numB;
    System.out.println(total);

    numA = 8;
    numB = 3;
    total = numA * numB;
    System.out.println(total);

    numA = 8;
    numB = 3;
    total = numA / numB;
    System.out.println(total);

    numA = 8;
    numB = 3;
    total = numA % numB;
    System.out.println(total);
  }
}
