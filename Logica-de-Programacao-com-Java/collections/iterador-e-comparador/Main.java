// Iterator e Comparator
/*
 * A interface Iterator faz parte do framework de collections
 * Java nos permite acessar elementos de uma coleção
 * Possui uma subinterface ListIterator
 * 
 * A interface Iterator fornece 4 métodos que podem ser usados para realizar várias operações em elementos de coleções.
 * - hasNext()
 * - next()
 * - remove()
 * - forEachRemaining()
 */
import java.util.ArrayList;
import java.util.Iterator;

class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<>();
    numbers.add(1);
    numbers.add(3);
    numbers.add(7);

    System.out.println("ArrayList: " + numbers);

    // Criando uma instância de Iterator
    Iterator<Integer> it = numbers.iterator();

    int number = it.next();
    System.out.println("Elemento: " + number);

    while(it.hasNext()) {
      it.forEachRemaining((value) -> System.out.println("Elemento: " + value + ", "));
    }
  }
}
