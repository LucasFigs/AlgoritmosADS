import java.util.Scanner;

public class MDC {
    public static void main(String[] args) {
        Scanner prompt = new Scanner(System.in);
        System.out.println("Digite o primeiro número:");
        int a = prompt.nextInt();
        System.out.println("Digite o segundo número:");
        int b = prompt.nextInt();
        prompt.close();

        int resultado = mdc(a, b);
        System.out.println("O MDC de " + a + " e " + b + " é: " + resultado);
    }

    public static int mdc(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
