#include <stdio.h>
int main()
{
    int n =3;
    for(int i=1; i<=n ; i++){
        for(int j=1 ; j<=i ; j++) printf("*\n");
        if(i<n){
            for(int j=1; j<=2*i; j++) printf("*");
            printf("\n");
        }
        else{
            for(int j=1; j<=n+1; j++) printf("*");
        }
    }   
    return 0;
}