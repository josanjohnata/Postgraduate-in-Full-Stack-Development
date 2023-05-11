// Modificadores de acesso
/*
 * Define como is métodos e atributos serão visualizados/acessados no projeto.
 * Modificadores
 * - public
 * - private
 * - Protected
 * 
 * O objetivo principal dos modificadores de acesso é impedir que o valor do atributo seja acessado diretamente.
 */
public class Person{
  private String nome; // só será possível invocar essa propriedade dentro do método Person.
  public int age; // é possível invocar a partir de qualquer método.
  protected String gender; //
  double weight;
  double height;

  public void calIMC(double weight, double height){
    double imc, weight2, height2;
    weight = weight2;
    height = height2;
    imc = weight/(height * height);
  }
}