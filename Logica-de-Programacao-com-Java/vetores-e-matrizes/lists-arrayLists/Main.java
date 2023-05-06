import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> states = new ArrayList<>();

    // Para adicionar um item no Array
    states.add("Ceará");
    states.add("Rio de Janeiro");
    states.add("Santa Catarina");

    // Para remover um item no Array
    states.remove("Rio de Janeiro");

    // Para verificar um item existe no Array e retorna boolean
    states.add("Ceará");
  }
}