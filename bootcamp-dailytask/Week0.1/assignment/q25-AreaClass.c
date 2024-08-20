class Area{
    Scanner sc= new Scanner(System.in);
    void circle(){
        System.out.println("enter radius");
        int radius = sc.nextInt();
        float area = (float) (3.14*radius*radius);
        System.out.println("Area of circle is "+area);
    }

    void square(){
        System.out.println("enter length");
        int length = sc.nextInt();
        float area = (float) length*length;
        System.out.println("Area of square is "+area);
    }

    void rectangle(){
        System.out.println("enter length : ");
        int length = sc.nextInt();
        System.out.println("enter breath : ");
        int breath = sc.nextInt();
        float area = length*breath;
        System.out.println("Area of reactangle is "+area);
    }

    void triangle(){
        System.out.println("enter base : ");
        int base = sc.nextInt();
        System.out.println("enter height : ");
        int height = sc.nextInt();
        float area = (float)0.5 * base * height;
        System.out.println("Area of reactangle is "+area);
    }
}


public class Main extends  Area{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Area myobj = new Area();


        System.out.println("Enter choice \n1.Circle \n2.Square \n3.Reactangle \n4.Triangle");
        int choice = sc.nextInt();

        switch (choice){
            case 1:
                myobj.circle();
                break;

            case 2:
                myobj.square();
                break;

            case 3:
                myobj.rectangle();
                break;

            case 4:
                myobj.triangle();
                break;

        }

    }
}