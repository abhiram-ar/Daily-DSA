#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);
    int fact = 1;

    if (n != 0){
    for(int i=1; i<=n ; i++) fact *= i;
    }

    printf("factorial of number : %d", fact);   
    return 0;
}