#include <stdio.h>
/*

**
*
*****
**
**
********
***
***
***
***********

*/
int main()
{
    int n=4;
    for(int i=1; i<=n; i++){
        for(int j=1 ; j<= 2+(3*(i-1)) ; j++) printf("*");
        printf("\n");

        if(i != n){
            for(int j=1; j<=i ; j++){
                for(int k=1; k<=i ; k++) printf("*");
                printf("\n");
            }
        }
    }   
    return 0;
}