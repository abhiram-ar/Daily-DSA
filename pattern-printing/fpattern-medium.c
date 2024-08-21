#include <stdio.h>
/*

* * 
*
*
*
* * * *
* * * *
*
*
*
* * * * * *
* * * * * *
* * * * * *

*/
int main()
{
    int n = 3;
    for (int i = 1; i <= n; i++)
    {

        for(int k=1; k<=i; k++){
            for(int j=1; j<=2*i; j++) printf("* ");
            printf("\n");
        }

        if(i != n){
            printf("*\n*\n*\n");
        }
    }
        
    return 0;
}
