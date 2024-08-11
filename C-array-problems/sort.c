#include <stdio.h>
#include <limits.h>

int main(int argc, char const *argv[])
{
    int arr[] = {10,7,3,6,22,4,22,6,4,2,2,-10,-99};
    int size = sizeof(arr)/sizeof(arr[0]);


    int temp;
    for(int i=0; i<size-1; i++){
        for (int j = i+1; j < size; j++)
        {
            if(arr[j] < arr[i]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }

    }

    printf("sorted array : ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    
    return 0;
}
