#include <stdio.h>

/*

1A2B3C4D5E
1A2B3C4D
1A2B3C
1A2B
1A

*/

int main(int argc, char const *argv[])
{
    int n= 5;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n-i; j++)
        {
            printf("%d%c",j+1, 65+j);
        }
        printf("\n");
        
    }
    
    return 0;
}
