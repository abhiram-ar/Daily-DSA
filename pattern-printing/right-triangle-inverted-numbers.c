#include <stdio.h>

/*
5 4 3 2 1 2 3 4 5
4 3 2 1 2 3 4
3 2 1 2 3
2 1 2
1 
*/

int main(){
    int n =5;
    for (int i = 0; i < n; i++)
    {
        for(int j=n-i;j>0;j--)printf("%d",j);
        for(int j=2;j<=n-i;j++) printf("%d",j);\
        printf("\n");
    }   
    
    return 0;
}