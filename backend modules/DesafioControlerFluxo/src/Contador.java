import handler.ParametrosInvalidosException;

import java.util.Scanner;

public class Contador {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o primeiro parâmetro");
        int firstParameter = sc.nextInt();
        System.out.println("Digite o segundo parâmetro");
        int secondParameter = sc.nextInt();

        try {
            count(secondParameter, firstParameter);

        } catch (ParametrosInvalidosException e) {
            throw new ParametrosInvalidosException(e.getMessage());
        }
    }

    static void count(int firstParameter, int secondParameter) throws ParametrosInvalidosException {
        if (firstParameter > secondParameter)
                throw new ParametrosInvalidosException("O segundo parâmetro deve ser maior que o primeiro");

        int budged = secondParameter - firstParameter;
        for (int i = 0; i <= budged; i++) {
            System.out.println("Imprimindo número: " + i);
        }

    }

}