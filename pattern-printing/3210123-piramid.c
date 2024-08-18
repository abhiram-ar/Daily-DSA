#include <stdio.h>
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
