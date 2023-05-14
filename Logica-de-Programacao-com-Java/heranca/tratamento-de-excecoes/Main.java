// Tratamentos de exceções
/*
 * Uma exceção é um evento inesperado que ocorre durante a execução do programa e que afeta seu fluxo.
 * 
 * Hierarquia de todas as exceções:
 *          THROWABLE
 * Error                Exception
 *          RuntimeException  IOException
 * 
 * THROWABLE = Superclasse de todos os erros e exceções na linguagem Java.
 * Error = Representam condições irrecuperáveis.
 * Exception = Podem ser capturadas e tratadas pelo programador.
 * RuntimeException = Exceção por tempo de execução.
 * IOException = Exceção de entrada e saída.
 * 
 * O bloco try/catch é usado para tratar exceções em java
 * O bloco finally é opcional e sempre será executado
 * Exemplo:
 * class Main {
 *  public static void main(String[] args) {
 *    try {
 *      //código
 *    }
 *    catch (ArithmeticException e) {
 *      //código
 *    }
 *    finally {
 *      //código
 *    }
 *  }
 * }
 */
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    try{
      System.out.println("Digite um valor");
      int number1 = s.nextInt();

      System.out.println(number1);
    } catch(Exception ex) {
      System.out.println("ERRO: O valor precisa ser um número!");
    }
  }
}
