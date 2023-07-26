abstract class Account {
  private double balance;

  public void setBalance(double balance){
    this.balance = balance;
  }

  public double getBalance(){
    return balance;
  }

  public abstract void printStatement();
}
