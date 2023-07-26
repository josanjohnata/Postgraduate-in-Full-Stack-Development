import java.util.Scanner;

// Entrada de dados
// A entrada deve ser feita utilizando a biblioteca "util.Scanner"
// - Criar um objeto Scanner
    // Scanner entrada = new Scanner(System.in);
// - Receber a entrada do usuário
    // int number = input nextlnt();

// Saída de dados
// Imprime na tela e quebra a linha -> System.out.println()
// Imprime na tela e não quebra a linha -> System.out.println()
// Imprime na tela e não quebra a linha -> System.out.println()
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    System.out.print("What is your name? ");

    String userName;
    Scanner input = new Scanner(System.in);
    userName = input.next();

    System.out.println("User: " + userName);
  }
}
