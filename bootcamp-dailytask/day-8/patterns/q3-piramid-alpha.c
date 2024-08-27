#include <stdio.h>
/*
        A 
      A B C
    A B C D E
  A B C D E F G
A B C D E F G H I
*/
int main()
{
    int n= 5;
    for (int i = 1; i <=n; i++)
    {
        for(int j=1 ; j<= n-i; j++)printf("  ");
        for(int j=1; j<=2*i-1; j++)printf("%c ", 65+j-1);
        printf("\n");
    }
       
    return 0;
}