#include <stdio.h>
/*
5 
5 4
5 4 3
5 4 3 2
5 4 3 2 1
*/
int main()
{
    int n=5;
    for(int i=1; i<=n; i++ ){
        for (int j = 5; j>=n-i+1; j--) printf("%d ", j);
        printf("\n");
        
    }    
    return 0;
}