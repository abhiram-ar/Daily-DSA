#include <stdio.h>
/*
A 
A 1 
A 1 B 
A 1 B 2 
A 1 B 2 C
*/
int main()
{
    int n =4;
    for(int i=0; i<=n; i++){
        for(int j=0; j<=i; j++){
            if(j%2 == 0) printf("%c ", 65 + j/2);
            else printf("%d ", (j+1)/2);
        }
        printf("\n");

    }    
    return 0;
}
