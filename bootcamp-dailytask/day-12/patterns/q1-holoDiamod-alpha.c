#include <stdio.h>
/*
    A
   A C
  A   E
 A     G
A       I
 A     G
  A   E
   A C
    A
*/
int main()
{
    int n = 5;
    for (int i = 1; i <= 2*n-1; i++)
    {   
        int realtiverow = i;
        if(i>n) realtiverow = 2*n-1 - i + 1;  

        for(int j=1; j<= n-realtiverow; j++) printf(" ");
        for(int j=1; j<=2*realtiverow-1; j++) {
            if(j==1 || j==2*realtiverow-1) printf("%c", 65+j -1);
            else printf(" ");
        }

        printf("\n");
    }
    
    return 0;
}