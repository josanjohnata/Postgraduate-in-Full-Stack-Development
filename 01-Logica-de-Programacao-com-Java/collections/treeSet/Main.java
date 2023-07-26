// TreeSet
/*
 * A class TreeSet do framework collections de Java fornece a funcionalidade de uma estrutura de dados em árvore.
 * Podemos acessar, remover e inserir elementos
 */
import java.util.TreeSet;

class Main {
  public static void main(String[] args) {
    TreeSet<Integer> numbers = new TreeSet<>();
    numbers.add(8);
    numbers.add(6);
    numbers.add(9);

    System.out.println(numbers);

    boolean result = numbers.remove(6);
    System.out.println("Removeu? " + result);

    boolean result2 = numbers.remove(10);
    System.out.println("Removeu? " + result2);

    boolean result3 = numbers.removeAll(numbers);
    System.out.println("Removeu? " + result3);

    System.out.println(numbers);
  }
}
