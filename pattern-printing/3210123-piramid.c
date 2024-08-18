#include <stdio.h>
/*
        0 
      1 0 1
    2 1 0 1 2
  3 2 1 0 1 2 3
4 3 2 1 0 1 2 3 4
*/
int main()
{
    int n = 5;
    for (int i = 0; i < n; i++)
    {
        //space
        for(int j=0; j<n-i-1;j++) printf("  ");

        //printing
        for(int j=0; j< 2*i+1 ; j++){
            int print = i-j;
            if(j>i) print = j - i;
            //or use abs() from stdlib.

            printf("%d ", print);
        
        }
        printf("\n");
    }
        
    return 0;
}
