#include <stdio.h>
int main()
{
    int arr[100];
    int n;
    scanf("%d", &n);

    int sum = 0;
    for(int i=0; i<n;i++){
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    printf("sum is : %d", sum);


    return 0;
}
