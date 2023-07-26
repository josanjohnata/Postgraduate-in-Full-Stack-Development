// LinkedList
/*
 * A classe LinkedList di framework collections do Java fornece a funcionalidade da estrutura de dados de lista vinculada (lista duplamente vinculada).
 * Cada elemento em uma lista encadeada é conhecido como um nó.
 * É composto pro 3 campos:
 * - Prev
 * - Next
 * - Dado
 *                _______ Prev | Dado | Next _______
 *               |                                  |
 *             __|__                              __|__
 *  Link para o elemento anterior         Link para o próximo elemento
 */
import java.util.LinkedList;

class Main {
  public static void main(String[] args) {
    LinkedList<String> animals = new LinkedList<>();

    animals.add("Gato");
    animals.add("Cachorro");
    animals.add("Vaca");

    System.out.println("LinkedList: " + animals);

    animals.add(1, "Cavalo");
    System.out.println("LinkedList: " + animals); 
  }
}
