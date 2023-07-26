public class Dog{
  String name;
  String color;
  int age;
  double weight;

  public Dog() {
    color = "Black and White";
  }

  public Dog(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public void Walk() {
    System.out.println("Dog walks..." + color);
  }

  public void DogData() {
    System.out.println(name + " " + age);
  }
}
