#include <stdio.h>

/*

*
**
***
****
*****
****
***
**
*

*/

int main()
{
    int n = 5;
    for (int i = 1; i <= 2*n-1; i++)
    {
        int relativerow = i;
        if(i>n){
            relativerow = (2*n-1) - i + 1 ;
        }

        for(int j=1; j<=relativerow;j++)printf("*");
        printf("\n");
    }
        
    return 0;
}
