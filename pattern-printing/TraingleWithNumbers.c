#include <stdio.h>

int main(int argc, char const *argv[])
{
    int n=5;

    for (int i = 0; i < n; i++)
    {   
        int val = i+1;
        int increment=5;
        for (int j = 0; j < n-i; j++)
        {
            printf("%d ",val);
            val += increment;
            increment--;
        }
        printf("\n");
        
    }
    
    return 0;
}
