#include<stdio.h>

/*

*****************
 ******* *******
  *****   *****
   ***     ***
    *********
     *******
      *****
       ***
        *

*/

int main(int argc, char const *argv[])
{
    int n = 4;
    for (int i = 0; i < 2*n+1; i++)
    {
        if(i==0){
            for (int j = 0; j < 4*n+1; j++)
            {
                printf("*");
            }
            printf("\n");
            continue;
        }

        //global spacing
        for(int j = 0; j <i; j++) printf(" ");

        //upper part
        if(i<n){
            for(int j = 0; j < 2*(n-i)+1 ; j++) printf("*");
            for(int j = 0; j < 2*i-1; j++) printf(" ");
            for(int j = 0; j < 2*(n-i)+1 ; j++) printf("*");
            printf("\n");
        }

        else{
            int vrow = i-n;
            for (int j = 0; j < 2*(n-vrow) +1 ; j++) printf("*");
            printf("\n");
        }

    }
    
    return 0;
}
