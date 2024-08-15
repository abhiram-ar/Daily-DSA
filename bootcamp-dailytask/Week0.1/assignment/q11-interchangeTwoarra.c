#include <stdio.h>
int main()
{
    int size;
    printf("enter size of array : ");
    scanf("%d", &size);
    
    int arr1[100];
    for(int i=0;i<size;i++) scanf("%d", &arr1[i]);

    int arr2[100];
    for(int i=0;i<size;i++) scanf("%d", &arr2[i]);

    int temp;
    for(int i=0;i<size;i++){
        temp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = temp;
    }

    printf("Arrays after swapping");
    printf("\nArray 1 :");
    for(int i=0; i<size;i++) printf("%d ", arr1[i]);

    printf("\nArray 2 :");
    for(int i=0; i<size;i++) printf("%d ", arr2[i]);
    return 0;
}
