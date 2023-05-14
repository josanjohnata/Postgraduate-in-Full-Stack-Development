public class Savings implements Account{
  private double balance;

  public void deposit(double value){
    this.balance += value;
  }

  public double getBalance() {
    return this.balance;
  }

  public void withdraw(double value){
    this.balance -= value;
  }
}
