#include <stdio.h>
/*
A 
A B
A B C
A B C D
A B C D E
*/
int main()
{
    int n=5;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <=i; j++) printf("%c ", 65+j);
        printf("\n");
        
    }
        
    return 0;
}