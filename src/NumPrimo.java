import java.util.Scanner;

public class NumPrimo {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Digite um número: ");
            int numero = scanner.nextInt();
            scanner.close();

            if (!ehPrimo(numero)) {
                System.out.println("O número " + numero + " NÃO é primo.");
            } else {
                System.out.println("O número " + numero + " é primo.");
            }
        }

        public static boolean ehPrimo(int num) {
            if (num < 2) return false;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        }


}
