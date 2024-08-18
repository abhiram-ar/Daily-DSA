#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++)
    {
        for(int j=n-i; j>=1; j--) printf(" ");
        
        
        int coef = 1;
        for (int j = 1; j <= i; j++)
        {
            printf("%d ",coef);
            coef = coef*(i-j)/j;
        }
        printf("\n");
        
    }
        
    return 0;
}
