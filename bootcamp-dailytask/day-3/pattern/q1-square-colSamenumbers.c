#include <stdio.h>

/*

1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 

*/


int main()
{
    int n = 5;
    for(int i=0; i<5; i++){
        for(int j=0; j<n; j++) printf("%d ", j+1);
        printf("\n");
    }    
    return 0;
}