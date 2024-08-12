#include <stdio.h>

/*

1 6 10 13 15 
2 7 11 14 
3 8 12 
4 9 
5 

*/

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
