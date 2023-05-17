// Método toString
/*
 * O método toString() converte o objeto em uma string e a retorna
 * A sintaxe é objeto.toString(), onde o toString não aceita parâmetros
 * Todas as classes e arrays podem implementar o método toString()
 */
class Main {
  public static void main(String[] args) {
    String first = "Java";
    String second = "Csharp";
    String third = new String("Python");

    System.out.println(first.toUpperCase());
    System.out.println(second.length());
    System.out.println(third);

    // comparar a primeira com a segunda string
    boolean result = first.equals(second);
    System.out.println("A primeira é igual a segunda? " + result);

    // comparar a segunda com a terceira string
    boolean result2 = second.equals(third);
    System.out.println("A segunda é igual a terceira? " + result2);
  }
}
