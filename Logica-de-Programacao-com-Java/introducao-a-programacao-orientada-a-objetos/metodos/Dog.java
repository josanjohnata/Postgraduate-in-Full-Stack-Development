public class Dog {
  private int age;

  public void setAge(int ageProp){
    age = ageProp;
  }

  public int getAge(){
    return age;
  }

  public void Walk(){
    System.out.println("Dog walking...");
  }

  public boolean AgeVerify(){
    if(age > 10){
      return true;
    } else {
      return false;
    }
  }
}