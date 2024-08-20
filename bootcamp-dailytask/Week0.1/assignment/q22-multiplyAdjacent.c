#include <stdio.h>
int main()
{
    int arr[100], size;
    printf("Enter array size: ");
    scanf("%d", &size);
    for(int i=0; i<size; i++) scanf("%d", &arr[i]);

    int arr2[size-1];
    for(int i=0; i<size-1;i++){
        arr2[i] = arr[i]*arr[i+1];
    }

    for(int i=0; i<size-1; i++) printf("%d ", arr2[i]);

    return 0;
}