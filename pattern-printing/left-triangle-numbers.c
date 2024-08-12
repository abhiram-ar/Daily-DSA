#include <stdio.h>

/*
5
45
345
2345
12345 
*/


int main(int argc, char const *argv[])
{
    int n=5;
    for (int i = 0; i < 5; i++)
    {
        for(int j=n-i;j<=n;j++)printf("%d", j);
        printf("\n");
    }
    
    return 0;
}
