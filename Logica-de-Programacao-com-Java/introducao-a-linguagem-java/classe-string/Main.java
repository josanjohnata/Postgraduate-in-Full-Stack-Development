// Obtendo o comprimento -> length()
// Juntando duas strings -> concat()
// Comparando duas strings -> equals()
// Extraindo substring -> substring()
// Verificar se uma string está em outra string -> contains()
// Substituir string -> replace()

class Main {
  public static void main(String[] args) {
    String value = "Descomplica - Java";

    System.out.println(value.length());
    System.out.println(value.concat(" é maravilhoso!"));
    System.out.println(value.equals("xablau"));
    System.out.println(value.substring(14));
    System.out.println(value.contains("Java"));
    System.out.println(value.replace("J", "P"));
  }
}