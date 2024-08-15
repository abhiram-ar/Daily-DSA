#include <stdio.h>

/*

    1
   232
  34543
 4567654
567898765

*/

int main(int argc, char const *argv[])
{
    int n = 5;
    for (int i=0; i<n ; i++){
        for (int j = 0; j < n-i-1; j++)
        {
            printf(" ");
        }

        for (int j = i+1; j <= 2*i+1; j++)
        {
            printf("%d", j);
        }

        for (int j = 2*i; j >= i+1; j--)
        {
            printf("%d", j);
        }
        printf("\n");
        
        
        
    }
    return 0;
}
