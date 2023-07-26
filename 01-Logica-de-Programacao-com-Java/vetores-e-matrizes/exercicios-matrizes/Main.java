/*
 * Considere que voc^tem a matriz ao lado.    1 2 3
 * Neste exemplo, vamos encontrar o ponto    |------
 * de sela de uma matriz quadrática nxn    1 |9 8 7
 * como esta.                              2 |5 3 2
 *                                         3 |6 6 7
 * O ponto de sela é:
 *  - O maior elemento em uma linha
 *  - O menor elemento em uma coluna
 */
class Main {
  public static void main(String[] args) {
    int[][] matriz = {{9, 8, 7}, {5, 3, 2}, {6, 6, 7}};

    int[] biggestLine = new int[3];
    int[] smallestColumn = new int[3];

    for(int i = 0; i < 3; i++)
      biggestLine[i] = 0;

    for(int i = 0; i < 3; i++)
      smallestColumn[i] = 10;

    // Maior elemento na linha 0
    for(int i = 0; i < 3; i++)
      if(matriz[0][i] > biggestLine[0])
        biggestLine[0] = matriz[0][i];

    // Maior elemento na linha 1
    for(int i = 0; i < 3; i++)
      if(matriz[1][i] > biggestLine[1])
        biggestLine[1] = matriz[1][i];

    // Maior elemento na linha 2
    for(int i = 0; i < 3; i++)
      if(matriz[2][i] > biggestLine[2])
        biggestLine[2] = matriz[2][i];

    //-------------------------------------------
    
    // Menor elemento na coluna 0
    for(int i = 0; i < 3; i++)
      if(matriz[i][0] > smallestColumn[0])
        smallestColumn[0] = matriz[0][i];

    // Menor elemento na coluna 1
    for(int i = 0; i < 3; i++)
      if(matriz[i][1] > smallestColumn[1])
        smallestColumn[1] = matriz[1][i];

    // Menor elemento na coluna 2
    for(int i = 0; i < 3; i++)
      if(matriz[i][2] > smallestColumn[2])
        smallestColumn[2] = matriz[2][i];
    //-------------------------------------------

    for(int i = 0; i < 3; i++)
      for(int j = 0; j < 3; j++)
        if(biggestLine[i] == smallestColumn[j])
          System.out.println("Ponto de sela: " + biggestLine[i]);
  }
}
