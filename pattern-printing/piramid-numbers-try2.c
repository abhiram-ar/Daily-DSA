#include <stdio.h>
/*

        1 
      2 3 2 
    3 4 5 4 3 
  4 5 6 7 6 5 4 
5 6 7 8 9 8 7 6 5 

*/
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for(int j=1; j<=n-i; j++) printf("  ");

        int k = i; //using extra variable for printing, manipulating j can messup the loop
        for(int j=1; j<=2*i-1;j++){

            if(j>=i) printf("%d ",k--);
            else printf("%d ",k++);
        }

        printf("\n");

        
    }
        
    return 0;
}
