// HashSet
/*
 * A classe HashSet do framework Collections do Java fornece as funcionalidades da estrutura de dados da tabela de hash.
 * Podemos acessar, remover e inserir elementos
 */
import java.util.HashSet;
import java.util.Iterator;

class Main {
  public static void main(String[] args) {
    HashSet<Integer> numbers = new HashSet<>();
    numbers.add(2);
    numbers.add(5);
    numbers.add(8);
    Iterator<Integer> it = numbers.iterator();
    while(it.hasNext()) {
      System.out.println(it.next());
    }
  }
}
