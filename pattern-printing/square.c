#include <stdio.h>
int main(int argc, char const *argv[])
{
    int n=7;
    for (int i = 1; i <= n/2+1; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if(j== (n/2)+1 || (j<n/2 + 1+i && j>n/2 + 1-i)) printf("*");
            else printf("%d",j);
            
        }
        printf("\n");
        
    }
    
    return 0;
}
