#include <stdio.h>
/*
XXXXXX
X
XXXX
X
XX
X
*/
int main()
{
    int n=6;
    for (int i = 1; i <=n; i++)
    {
        for(int j=1; j<=n-i+1; j++){
            if(i%2==0){
                printf("X");
                break;
            }
            printf("X");
        }
        printf("\n");
    }
        
    return 0;
}
