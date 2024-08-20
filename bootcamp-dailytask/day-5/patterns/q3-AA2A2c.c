#include <stdio.h>
/*
A 
A 2
A 2 C
A 2 C 4
*/
int main()
{
    int n=4;
    for (int i = 1; i <=n; i++)
    {
        for (int j = 1; j <=i; j++)
        {
            if(j%2==1) printf("%c ", 65+j-1);
            else printf("%d ", j); 
        }
        printf("\n");
        
    }
       
    return 0;
}