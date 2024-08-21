#include <stdio.h>
/*
    1
   123
  12345
 1234567
123456789
 1234567
  12345
   123
    1
*/
void variation1(){
    int n = 5;
    for (int i = 1; i <= 2*n-1; i++)
    {   if(i<=n){
        for(int j=1; j<= n-i ; j++)printf(" ");
        for(int j=1; j<=2*i-1; j++) printf("%d", j);
        printf("\n");
        }
        else{
            for(int j=1; j<=i-n; j++ ) printf(" ");
            for(int j=1; j<=2*(2*n-1 - i)+1; j++) printf("%d",j);
            printf("\n");
        }
    }
}

    /*
        1 
       1 2
      1 2 3
     1 2 3 4
    1 2 3 4 5
   1 2 3 4 5 6
  1 2 3 4 5 6 7
 1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
 1 2 3 4 5 6 7 8
  1 2 3 4 5 6 7
   1 2 3 4 5 6
    1 2 3 4 5
     1 2 3 4
      1 2 3
       1 2
        1
    */
  
void variation2(){
    int n = 9;
    for(int i=1; i<=2*n-1; i++){
        if(i<=9){
            for(int j=1; j<=n-i; j++) printf(" ");
            for(int j=1; j<=i; j++) printf("%d ", j);
            printf("\n");
        }
        else{
            for(int j=1; j<=i-n; j++)printf(" ");
            for(int j=1; j<=2*n-1 -i+1 ; j++)printf("%d ", j);
            printf("\n");
        }
    }
}

int main()
{   
    printf("-------------variation 1:---------------\n");
    variation1();
    printf("\n\n------------Variation 2-------------\n");
    variation2();
       
    return 0;
}