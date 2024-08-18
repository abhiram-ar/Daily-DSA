#include <stdio.h>
int main()
{
    int n=5;
    for (int i=1; i<=2*n-1; i++)
    {
        int realativerow=i;
        if(i>n) realativerow = (2*n-1) - i + 1; 

        for(int j=1; j<= realativerow ;j++) printf("%d ", j);
        printf("\n");
    }
        
    return 0;
}
