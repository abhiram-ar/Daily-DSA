#include <stdio.h>

int getArray(int arr[]){
    int size;
    printf("enter arr size: ");
    scanf("%d", &size);
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);
    }
    return size;
}

int displayArray(int arr[], int size){
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
}

int main()
{
    int arr[100], size;

    size = getArray(arr);

    displayArray(arr, size);
        
    return 0;
}
