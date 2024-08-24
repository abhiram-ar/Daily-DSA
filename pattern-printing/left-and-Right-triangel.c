#include <stdio.h>
/*

*           * 
* *       * *
* * *   * * *
* * * * * * *

*/
int main()
{
    int n=4;
    for (int i = 1; i <=n; i++)
    {
        for (int j = 1; j <=2*n-1; j++)
        {
            if(i-j >= 0) printf("* ");
            else if(i+(j-(n-1)) >= n+1) printf("* ");
            else printf("  ");
        }
        printf("\n");
        
    }
       
    return 0;
}