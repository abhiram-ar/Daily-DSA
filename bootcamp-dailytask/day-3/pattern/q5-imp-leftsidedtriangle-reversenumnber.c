#include <stdio.h>
/*

5 
4 5
3 4 5
2 3 4 5
1 2 3 4 5

*/
int main()
{
    int n = 5;
    for (int i = 5; i >= 1; i--)
    {
        // do rememebeer you have to increment here
        for(int j=i; j<=5; j++) printf("%d ", j);
        printf("\n");
    }
        
    return 0;
}