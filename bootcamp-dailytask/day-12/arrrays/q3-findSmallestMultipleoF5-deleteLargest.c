#include <stdio.h>
#include <limits.h>

int main()
{
    int arr[] = {1,2,3,4,5,6,7,8,9,10,11};
    int size = sizeof(arr)/sizeof(arr[0]);

    int smallest = INT_MAX;
    int largest = INT_MIN;

    for (size_t i = 0; i < size; i++)
    {
        if(arr[i] % 5 == 0){
            if(arr[i] < smallest) smallest = arr[i];
            else if ( arr[i] > largest) largest = arr[i];
        }
    }

    printf("smallest : %d", smallest);
    printf("\nlargest :%d\n", largest);

    for (int i = 0; i < size; i++)
    {
        if(arr[i] == largest){
            for(int j=i; j<size;j++) arr[j] = arr[j+1];
            size--;
            i--;
        }
    }
    
    for(int i=0; i<size; i++)printf("%d ", arr[i]);
    
    return 0;
}