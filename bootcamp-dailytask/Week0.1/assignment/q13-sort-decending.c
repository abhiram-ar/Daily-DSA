#include <stdio.h>
int main()
{
    int size, arr[100];
    printf("Enter the array size:");
    scanf("%d",&size);

    for(int i=0;i<size;i++) scanf("%d", &arr[i]);

    //sort
    for(int i=0; i<size-1; i++){
        for(int j= i+1 ; j<size; j++){
            if(arr[i] < arr[j]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    printf("sorted array : ");
    for(int i=0; i<size; i++) printf("%d ", arr[i]);

    return 0;
}