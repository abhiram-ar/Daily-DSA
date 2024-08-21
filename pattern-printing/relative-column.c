#include <stdio.h>
/*
1 2 3 4 3 2 1 
1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1
*/
int main()
{
    int n = 4;
    for(int i=1; i<=2*n-1; i++){
        
        for(int j=1; j<=2*n-1; j++){
            int relativecol = j;
            if(j>n) relativecol = 2*n-1 - j + 1;
            printf("%d ", relativecol);
            
        }
        printf("\n");
    }
    return 0;
}
