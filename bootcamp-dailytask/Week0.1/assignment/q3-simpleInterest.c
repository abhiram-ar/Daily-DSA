#include <stdio.h>
int main()
{
    int P;
    float R,n,SI;
    scanf("%d%f%f",&P, &R, &n);
    SI = (P*(R/100)*n);
    printf("simple interest is : %f", SI);    
    return 0;
}
