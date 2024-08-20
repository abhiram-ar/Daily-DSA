#include <stdio.h>
/*
A 
1 1
B B B
2 2 2 2
C C C C C
*/
int main()
{
    int n=5;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            if(i%2 == 0) printf("%c ",65+ (i+1)/2);
            else printf("%d ", (i+1)/2);
        }
        printf("\n");
        
    }
    
    return 0;
}