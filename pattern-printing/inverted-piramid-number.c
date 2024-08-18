#include <stdio.h>
/*
1 2 3 4 5 
 2 4 6 8
  3 6 9
   4 8
    5
*/
int main()
{
    int n=5;
    for (int i = 1; i <= n; i++)
    {
        for(int j=0;j< i-1; j++) printf(" ");

        // better to use a variable and increament than for loop logic
        int k = i;
        for(int j=1; j<= n-i+1; j++){
            printf("%d ", k);
            k += i;
        }
        printf("\n");
    }
        
    return 0;
}
