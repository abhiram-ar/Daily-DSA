#include <stdio.h>

int main(int argc, char const *argv[])
{
    int n=3;
    for (int i = 0; i < 2*n+1; i++)
    {
        if(i<=n){
            for(int j=0;j<i;j++) printf(" ");
            for(int j=0;j<=i;j++) printf("*");
            printf("\n");
        }
        else{
            int vrow = i-n;
            for(int j=0;j<(n)-vrow;j++) printf(" ");
            for(int j=0;j<=(n)-vrow;j++) printf("*");
            printf("\n");
        }
    }
    
    return 0;
}
