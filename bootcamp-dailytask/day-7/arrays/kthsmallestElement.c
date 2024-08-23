#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,1,3,7,6,7,9,9,11,10};
    int size = sizeof(arr)/sizeof(arr[0]);

    //sort
    for(int i=0; i<size-1 ; i++){
        for(int j=i+1; j<size; j++){
            if(arr[j] < arr[i]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }   

    for(int i=0; i<size ; i++) printf("%d ",arr[i]);

    int k = 5;
    for(int i=1; i<size; i++){
        if(arr[i] != arr[i-1]){
            k--;
            if(k==1){
                printf("\nkth smallst element : %d", arr[i]);
                break;
            }
        }
    }
    return 0;
}