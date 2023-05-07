import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> bands = new ArrayList<String>();

    bands.add("Kiss");
    bands.add("Beatles");
    bands.add("Iron Maiden");
    
    System.out.println(bands);

    bands.add(bands.indexOf("Kiss"), "Capital Inicial");

    System.out.println(bands);

    bands.remove("Kiss");

    System.out.println(bands);

    bands.clear();

    System.out.println(bands);
  }
}