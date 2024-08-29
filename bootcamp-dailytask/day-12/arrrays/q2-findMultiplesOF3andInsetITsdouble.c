#include <stdio.h>
int main()
{
    int arr[20] = {1,2,3,4,5,6,7,8,9,10,11,12};
    int size = 12;

    for (int i = 0; i < size; i++)
    {
        if(arr[i] % 3 == 0){
            printf("%d ", arr[i]);
            for(int j=size; j>i; j--) arr[j] = arr[j-1];
            arr[i+1] = 2* arr[i];
            size++;
            i++;
        }
    }

    printf("\n");
    for(int i=0; i<size; i++) printf("%d ", arr[i]);
    
    return 0;
}