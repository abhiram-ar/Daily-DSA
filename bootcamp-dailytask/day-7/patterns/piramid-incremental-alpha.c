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
    int n = 5;
    for (int i = 1; i <=n; i++)
    {
        for(int j=1; j<=n-i; j++) printf(" ");
        for(int j=1; j<=i; j++) printf("%c ",65 + (j-1));
        printf("\n");
    }
       
    return 0;
}