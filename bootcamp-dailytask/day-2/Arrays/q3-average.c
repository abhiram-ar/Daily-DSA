#include <stdio.h>
int main()
{
    int arr[100], size;
    printf("enter size followed my array elements:\n");
    scanf("%d", &size);

    int sum;
    for(int i = 0; i<size; i++){ 
        scanf("%d", &arr[i]);
            sum += arr[i];
        }
    
    float average = sum/size;
    printf("Average is : %.3f", average);

    return 0;
}
