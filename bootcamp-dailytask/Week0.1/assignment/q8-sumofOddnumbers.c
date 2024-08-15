#include <stdio.h>
int main()
{
    int limit;
    scanf("%d", &limit);
    
    int oddSum = 0;
    for(int i=1; i<limit; i+=2){
        oddSum += i;
    }

    printf("Sum of odd numbers = %d", oddSum);

    return 0;
}
