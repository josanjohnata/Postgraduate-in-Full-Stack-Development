import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    int option = 0;
    
    while(option != 99) {
      System.out.println("Digite um número qualquer ou 99 para sair: ");
      Scanner inputUser = new Scanner(System.in);

      option = inputUser.nextInt();
    }
  }
}
