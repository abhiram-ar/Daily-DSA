#include <stdio.h>
/*
    A
   A C
  A   E
 A     G
ABCDEFGHI
*/
int main()
{
    int n=5;
    for (int i = 1; i <= n; i++)
    {
        for(int j=1; j<=n-i; j++)printf(" ");
        for(int j=1; j<=2*i-1; j++){
            if(j==1 || j==2*i-1 || i==n) printf("%c", 65+j-1);
            else printf(" ");
        }
        printf("\n");
    }
       
    return 0;
}