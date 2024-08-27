#include <stdio.h>
int main()
{
    int arr[] = {10,2,3,5,1,11,8,7,9,-1};
    int size = sizeof(arr)/sizeof(arr[0]);

    for(int i=0; i<size/2;i++){
        for(int j=i+1; j<size/2; j++){
            if(arr[j] > arr[i]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for(int i=size/2; i<size; i++){
        for(int j=i+1; j<size; j++){
            if(arr[j] < arr[i]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }



    for(int i=0; i<size; i++) printf("%d ", arr[i]);
    return 0;
}