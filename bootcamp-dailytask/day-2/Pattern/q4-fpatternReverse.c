#include <stdio.h>

/*

* * * * * * * * 
* * * * * * 
* * * * 
* * 

*/

int main()
{
    int n = 4;
    for (int i = 0; i < n; i++)
    {
        for(int j=0; j<2*(n-i); j++) printf("* ");
        printf("\n");
    }
        
    return 0;
}