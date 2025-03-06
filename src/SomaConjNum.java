import java.util.Scanner;

public class SomaConjNum {
    public static void main(String[] args) {
        soma();
    }

    public static void soma() {
        Scanner prompt = new Scanner(System.in);
        System.out.println("Quantidade de números:");
        short n = prompt.nextShort();
        long soma = 0;

        for (short i = 0; i < n; i++) {
            System.out.println("Número:");
            int numero = prompt.nextInt();
            soma += numero;
        }

        System.out.println("Soma = " + soma);
        prompt.close();
    }
}
