#include <stdio.h>
#include <limits.h>
int main()
{
    int arr[] = {10,1,2,3,4,5,6,7,8,9,10,8,-10,11};
    int size = sizeof(arr)/sizeof(arr[0]);

    int third = INT_MIN;
    int second = INT_MIN;
    int first = INT_MIN;

    for(int i=0; i<size; i++){
        if(arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        }
        else if(arr[i] > second && arr[i] != first){
            second = third;
            second = arr[i];
        }
        else if(arr[i] > third && arr[i] != second && arr[i] != first){
            third = arr[i];
        }
    }

    printf("third largest element : %d ", third);
    return 0;
}