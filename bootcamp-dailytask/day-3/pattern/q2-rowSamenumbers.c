#include <stdio.h>

/*

1 1 1 1 1 
2 2 2 2 2 
3 3 3 3 3 
4 4 4 4 4 
5 5 5 5 5 

*/

int main()
{
    int n = 5;
    for (int i = 0; i < n; i++)
    {
        for(int j=0; j<n ; j++) printf("%d ", i+1);
        printf("\n");
    }
        
    return 0;
}
