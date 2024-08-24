#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,5,-1,6,-3,-22,10,12,-10};
    int size = sizeof(arr)/sizeof(arr[0]);

    int negIndex = 0;
    for(int i=0; i<size; i++){
        if(arr[i] < 0){
            int temp = arr[i];
            for(int j=i; j>negIndex; j--) arr[j] = arr[j-1];
            arr[negIndex++] = temp;
        }
    }

    for(int i=0; i<size; i++)printf("%d ", arr[i]);
    return 0;
}