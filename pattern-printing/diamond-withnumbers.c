#include <stdio.h>


/*
    1
   1*2
  1*2*3
 1*2*3*4
1*2*3*4*5
 1*2*3*4
  1*2*3
   1*2
    1
*/

int main(int argc, char const *argv[])
{
    int n = 5;
    for (int i = 0; i < 2*n-1; i++)
    {
        if(i<n){
            for(int j=0; j<n-i-1;j++)printf(" ");
            for (int j = 0; j < 2*i+1; j++)
            {
                if(j%2 == 0) printf("%d",(j+2)/2);
                else printf("*");
            }
            printf("\n"); 
        }
        else
        {
            int vrow = i-n;
            for(int j=0; j<vrow+1; j++) printf(" ");
            for (int j = 0; j < 2 * (n-1 -1 - vrow) + 1; j++)
            {
                if(j%2 == 0) printf("%d",(j+2)/2);
                else printf("*");
            }
            printf("\n"); 
            
        }
    }
    
    return 0;
}
