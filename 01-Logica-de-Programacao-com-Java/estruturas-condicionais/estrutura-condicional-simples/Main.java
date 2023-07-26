class Main {
  public static void main(String[] args) {
    int grade;
    grade = 9;

    if(grade >= 6) {
      System.out.println("Aluno APROVADO!");
    } else if(grade >= 4 && grade < 6) {
      System.out.println("Aluno em RECUPERAÇÃO!");
    } else {
      System.out.println("Aluno REPROVADO!");
    }
  }
}
