#include <stdio.h>
/*
1 2 3 
4 5 6 
7 8 9 
*/
int main()
{
    int n=3;
    int count = 1;
    for (int i = 1; i <= n; i++)
    {
        for(int j=1; j<=n ;j++) printf("%d ", count++);
        printf("\n");
    }
    
    return 0;
}