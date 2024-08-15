#include <stdio.h>

/*

      *
     **
    * *
   *  *
  *   *
 *    *
*******

*/

int main()
{
    int n = 7;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            //remeber if allthe condition is true we will print only one *
            if(j==n-i-1 || j==n-1 || i==n-1) printf("*");
            else printf(" ");
        }
        printf("\n");
        
    }
        
    return 0;
}
