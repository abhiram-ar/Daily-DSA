class Calculator{
    public void addition(int a, int b){
        System.out.println("sum of numbers is: " + (a+b));
    }

    public void subtraction(int a, int b){
        System.out.println("Difference of numbers is: " + (a-b));
    }

    public void multiplication(int a, int b){
        System.out.println("Product of numbers is: " + (a*b));
    }

    public void division(int a, int b){
        int result;
        try{
            result = a/b;
            System.out.println("quotient of division is: " + result);
        }
        catch (ArithmeticException e){
            System.out.println("Cannot divide by zero");
        }

    }
}


public class Main {
    public static void main(String[] arr){
        Scanner sc = new Scanner(System.in);

        Calculator cal = new Calculator();
        System.out.println("Eneter two numbers: ");
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        System.out.println("Enter\n1: for addition \n2:for substraction \n3:for multiplication \n4:for divistion ");
        int choice = sc.nextInt();
        switch (choice){
            case 1: cal.addition(num1, num2);
                    break;

            case 2: cal.subtraction(num1, num2);
                break;

            case 3: cal.multiplication(num1, num2);
                break;

            case 4: cal.division(num1, num2);
                break;

                default:
                    System.out.println("invalid choice");
        }


    }
}