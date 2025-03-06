import java.util.Scanner;

public class Contagem {
    public static void main(String[] args) {
        Scanner prompt = new Scanner(System.in);
        System.out.println("Digite o valor de N:");
        int n = prompt.nextInt();

        System.out.println("Digite os " + n + " números do conjunto:");
        int[] conjunto = new int[n];
        for (int i = 0; i < n; i++) {
            conjunto[i] = prompt.nextInt();
        }
        prompt.close();

        int primeiroValor = conjunto[0];
        int contagem = 0;

        for (int num : conjunto) {
            if (num >= primeiroValor && num <= n) {
                contagem++;
            }
        }

        System.out.println("Quantidade de valores entre " + primeiroValor + " e " + n + ": " + contagem);
    }
}
