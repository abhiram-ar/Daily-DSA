#include <stdio.h>
/*
50 
45 40 
35 30 25 
20 15 10 5 
*/
int main()
{
    int n=4;
    int count = 50;
    for (int i = 1; i <=count; i++)
    {
        for(int j=1; j<=i ; j++) {
            printf("%d ", count);
            count -= 5;
        }
        printf("\n");
    }
    
    return 0;
}