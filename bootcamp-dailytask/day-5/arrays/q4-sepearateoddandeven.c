#include <stdio.h>
int main(){
    int arr[] = {1,2,3,4,5,11,12,14,15,15,22,24};
    int size = sizeof(arr)/sizeof(arr[0]);
    
    int evenArr[100], oddArr[100];
    int evenPtr=0, oddPtr=0;

    for(int i=0; i<size; i++){
        if(arr[i]%2 == 0){
            evenArr[evenPtr] = arr[i];
            evenPtr++;
        }
        else{
            oddArr[oddPtr] = arr[i];
            oddPtr++;
        }
    }

    printf("\nEven arr: ");
    for(int i=0; i< evenPtr; i++) printf("%d ", evenArr[i]);
    
    printf("\nOdd arr: ");
    for(int i=0; i< oddPtr; i++) printf("%d ", oddArr[i]);
    return 0;
}