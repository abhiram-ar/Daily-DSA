#include <stdio.h>
/*
* * * 
*
*
* * * * * *
*
*
* * * * * * * * *
*
*
*/
int main()
{
    int n=3;
    for (int i = 1; i <= n; i++)
    {
        for(int j=1; j<=i*3; j++) printf("* ");
        printf("\n*\n*\n");
    }
    
    return 0;
}
