import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner inputUser = new Scanner(System.in);

    System.out.println("Escolha uma opção: ");
    System.out.println("1 - Cadastrar aluno: ");
    System.out.println("2 - Cadastrar nota: ");
    System.out.println("3 - Exibir lista de alunos e notas: ");

    int number = inputUser.nextInt();

    switch(number) {
      case 1:
        System.out.println("Vamos cadastrar aluno:");
      break;
      case 2:
        System.out.println("Vamos cadastrar nota:");
      break;
      case 3:
        System.out.println("Lista de alunos e notas:");
      break;
      default:
        System.out.println("O número é inválido");
    }
  }
}
