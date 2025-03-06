import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        fibonacci();
    }

    public static void fibonacci() {
        Scanner prompt = new Scanner(System.in);
        System.out.println("Número de termos:");
        byte n = prompt.nextByte();
        prompt.close();

        long a = 0, b = 1, c;

        if (n <= 0) {
            System.out.println("Por favor, insira um número maior que zero.");
            return;
        } else if (n == 1) {
            System.out.println(a);
            return;
        }

        System.out.print(a + ", " + b);

        for (int i = 2; i < n; i++) {
            c = a + b;
            System.out.print(", " + c);
            a = b;
            b = c;
        }

        System.out.println();
    }
}
