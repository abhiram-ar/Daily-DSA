#include <stdio.h> 
#include <limits.h> //for INT_MAX

int main(int argc, char const *argv[])
{
    int arr[] = {10,7,3,6,22,4,6,4,2,2};
    int arrSize = sizeof(arr)/sizeof(int);
    
    int first =INT_MAX,second = INT_MAX;

    for(int i = 0; i<arrSize; i++){
        if(arr[i] < first){
            second = first;
            first = arr[i];
        }
        if(arr[i] < second && arr[i] != first){
            second = arr[i];

        }
    }
    printf("second smallest element is :%d ", second);
    return 0;
}
