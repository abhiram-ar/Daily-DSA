#include <stdio.h>
int main()
{
    int n = 5;
    for (int i = 1; i <= n+1; i++)
    {
        for(int j=n+1-i; j>=0;j++) printf("-");
    }
        
    return 0;
}
