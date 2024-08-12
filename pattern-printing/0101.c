#include <stdio.h>

int main(int argc, char const *argv[])
{
    int n = 4;
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0;j <=i; j++)
        {
            printf("%d", (j+1)%2 ); //or (j%2) if you want to start from 0 insted of 1 
        }
        printf("\n");
        
    }
    
    return 0;
}
