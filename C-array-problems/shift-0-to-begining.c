#include <stdio.h>
int main()
{
    int arr[] = {0,3,4,0,1,2,0,0,1,12,1};
    int size = sizeof(arr)/sizeof(arr[0]);

    int zeroptr = 0;
    for(int i=0; i<size; i++){
        if(arr[i] == 0 ){
            for(int j=i ; j>zeroptr; j--){
                arr[j] = arr[j-1];
            }
            arr[zeroptr++] = 0 ;
        }
    }   

    for(int i=0; i<size; i++)printf("%d ", arr[i]);
    return 0;
}