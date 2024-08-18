#include <stdio.h>

/*

1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5

*/

int main()
{
    int n=5;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0;  j<=i; j++)printf("%d ", j+1);
        printf("\n");
        
    }
    
    return 0;
}