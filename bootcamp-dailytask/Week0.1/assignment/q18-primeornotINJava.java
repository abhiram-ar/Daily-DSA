public class Main {
    public static void main(String[] arr){
        System.out.println("enter a number: ");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        int isprime = 1;
        if(num <= 0 || num == 1) isprime = 0;
        for(int i = 2; i<= num/2; i++){
            if(num%i == 0) {
                isprime = 0;
                break;
            }
        }

        if(isprime == 1) System.out.println(num + " is prime");
        else System.out.println(num + "is not prime");
    }
}