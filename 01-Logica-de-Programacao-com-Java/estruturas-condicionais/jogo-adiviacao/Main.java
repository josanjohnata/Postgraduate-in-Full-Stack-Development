import java.util.Scanner;
import java.util.Random;

class Main {
  public static void main(String[] args) {
    Random numberGenerate = new Random();
    int randomNumber = numberGenerate.nextInt(100);

    Scanner inputUser = new Scanner(System.in);
    System.out.println("Adivinhe o número que estou pensando.");

    int userNumber = inputUser.nextInt();

    if(userNumber == randomNumber) {
      System.out.println("Parabéns! Você acertou! Eu pensei no " + randomNumber);
    } else {
      System.out.println("Você errou! Vou pensar em outro número, tente novamente.");
    }
  }
}
