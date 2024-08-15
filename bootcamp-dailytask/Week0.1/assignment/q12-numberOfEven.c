#include <stdio.h>
int main()
{
    int size, arr[100], evenNumbers = 0;
    scanf("%d", &size);

    for(int i=0;i<size; i++) {
        scanf("%d", &arr[i]);
        if(arr[i]%2 == 0 ) evenNumbers++;
    }

    printf("Number of even numbers : %d", evenNumbers);
    return 0;
}
