#include <stdio.h>
/*
1 1 1 1 1 1 1 
2 2 2 2 2 2 2
3 3 3 3 3 3 3
4 4 4 4 4 4 4
3 3 3 3 3 3 3
2 2 2 2 2 2 2
1 1 1 1 1 1 1
*/
int main()
{
    int n=4;
    for (int i=1; i <= 2*n-1; i++)
    {
        int relativerow = i;
        if(i>n) relativerow = 2*n-1 - i + 1; 
        for (int j=1; j <= 2*n-1; j++)
        {
            printf("%d ", relativerow);
        }
        printf("\n");
        
    }
    
    return 0;
}
