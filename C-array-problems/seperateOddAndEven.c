// Write a program in C to separate odd and even integers into separate arrays
// timer : 7:53

#include <stdio.h>

int main(){
    int arr[] = {1,5,2,6,5,7,33,66,0,11,32};
    int size = sizeof(arr)/sizeof(arr[0]);
    int evenArr[100],oddArr[100];
    int evenCounter = 0 , offCounter = 0;
    for(int i=0; i<size;i++){
        if(arr[i]%2==0) {
            evenArr[evenCounter] = arr[i];
            evenCounter++;
        }
        else{
            oddArr[offCounter] = arr[i];
            offCounter++;
        }

    }

    for(int i = 0; i< evenCounter;i++) printf("%d ", evenArr[i]);
    printf("\n");
    for(int i = 0; i< offCounter;i++) printf("%d ", oddArr[i]);

    return 0;
}