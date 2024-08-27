#include <stdio.h>
/*
123456789
 1234567
  12345
   123
    1
*/
int main()
{
    int n=5;
    for (int i = 1; i <= n; i++)
    {
        for(int j=1; j<i; j++)printf(" ");
        for(int j=1; j<=2*(n-i+1) - 1 ; j++)printf("%d",j);
        printf("\n");
    }
    
    return 0;
}