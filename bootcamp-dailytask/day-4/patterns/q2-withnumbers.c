#include <stdio.h>
/*
1 
1 2 3
1 2 3 4 5
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 9
*/
int main()
{
    int n=5;
    for (int i = 1; i <=n; i++)
    {
        for(int j=1; j<=2*i-1; j++)printf("%d ", j);
        printf("\n");
    }
        
    return 0;
}