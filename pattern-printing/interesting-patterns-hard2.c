#include<stdio.h>
/*

*                 * 
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 *

*/

int main(int argc, char const *argv[])
{
    int n=5;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < 2*n; j++)
        {
            if(i-j>=0) printf("* ");
            else if (i+(j-n)>=n-1) printf("* ");
            else printf("  ");
        }
        printf("\n");
        
        
    }
    
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < 2*n; j++)
        {
            if(i+j<=n-1) printf("* ");
            else if(i-(j-n)<=0) printf("* ");
            else printf("  ");
        }
        printf("\n");
        
    }
    return 0;
}
