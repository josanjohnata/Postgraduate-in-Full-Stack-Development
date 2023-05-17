// Projeto com Listas
import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> languages = new ArrayList<>();

    languages.add("Java");
    languages.add("CSharp");
    languages.add("Python");
    languages.add("JavaScript");

    System.out.println("Linguagens: " + languages);

    String[] arr = new String[languages.size()];

    languages.toArray(arr);
    System.out.println("Array: ");

    for(String item:arr){
      System.out.println(item + ", ");
    }
  }
}
