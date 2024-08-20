#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,7,3,11,13,15,14,1};
    int size = sizeof(arr)/sizeof(arr[0]);

    for(int i=0; i<size; i++){
        printf("%d ", arr[i]);
        if(arr[i]%2 == 1){
            i += 2;
        }
    }   
    return 0;
}