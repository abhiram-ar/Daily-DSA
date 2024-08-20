class Matrix{
    void getArray(int[][] array){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter array elements: ");
        for (int i=0; i< array.length ; i++){
            for(int j=0; j< array[i].length; j++){
                array[i][j] = sc.nextInt();
            }
        }
    }

    void displayArray(int[][] array){
        System.out.println("Array elements are :");
        for (int i=0; i< array.length ; i++){
            for(int j=0; j< array[i].length; j++){
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter array size : ");
        int size = sc.nextInt();

        int[][] arr = new int[size][size];

        Matrix m1 = new Matrix();
        m1.getArray(arr);

        m1.displayArray(arr);
    }
}