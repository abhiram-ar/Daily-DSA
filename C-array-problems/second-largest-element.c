#include <stdio.h>
#include <limits.h>

int main(int argc, char const *argv[])
{
    int arr[] = {10,7,3,6,22,4,22,6,4,2,2,-10,-99};
    int size = sizeof(arr)/sizeof(arr[0]);

    int first, second = INT_MIN, temp;

    for(int i=0; i<size; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if(arr[i] > second && arr[i] != first) second = arr[i];
    }

    printf("second largest element : %d", second);
    return 0;
}
