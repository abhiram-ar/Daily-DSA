#include <stdio.h>
int main()
{
    int n =3;
    for (int i = 1; i <=n; i++)
    {
        for(int j=1; j<=2*i; j++) printf("* ");
        printf("\n");
        
        for(int j=1; j<=i; j++) printf("*\n");
    }
        
    return 0;
}