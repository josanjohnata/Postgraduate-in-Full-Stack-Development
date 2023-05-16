// Sobrescrita de métodos
/*
 * Se o mesmo método for definido na superclasse e na subclasse, o método da classe da subclasse substituirá o método da superclasse.
 * 
 * Tanto a superclasse quanto a subclasse  devem ter o mesmo nome  de método, o MESMO TIPO DE RETORNO e A MESMA LISTA DE PARÂMETROS.
 */
class Language {
  public void showInfo() {
    System.out.println("Língua Portuguesa");
  }
}

class Java extends Language {
  public void showInfo() {
    System.out.println("Línguagem Java");
  }
}


class Main {
  public static void main(String[] args) {
    // Criar um objeto da linguagem java
    Java j1 = new Java();
    j1.showInfo();

    // Criar um objeto da linguagem
    Language l1 = new Language();
    l1.showInfo();
  }
}
