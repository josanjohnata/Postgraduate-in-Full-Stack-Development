/* 
 * Você é um ávido observador de pássaros
 * Durante 14 dias você anotou quantos pássaros visitaram o seu jardim
 * Agora você deseja realizar uma estatística para responder as perguntas a seguir:
 
 * a) Número total de pássaros
 * b) Número total de pássaros na primeira semana
 * c) Número total de pássaros na segunda semana
 
 * Vetor de entrada:
 *  - birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
*/
class Main {
  public static void main(String[] args) {
    int[] birdsPerDay = {2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1};

    int birdsTotal = 0;
    int birdsFirstWeek =0;
    int birdsSecondWeek = 0;

    for(int i = 0; i < 14; i++) {
      birdsTotal = birdsTotal + birdsPerDay[i];
    }

    System.out.println(birdsTotal);

    for(int i = 0; i < 7; i++) {
      birdsFirstWeek = birdsFirstWeek + birdsPerDay[i];
    }

    System.out.println(birdsFirstWeek);

    for(int i = 7; i < 14; i++) {
      birdsSecondWeek = birdsSecondWeek + birdsPerDay[i];
    }

    System.out.println(birdsSecondWeek);
  }
}