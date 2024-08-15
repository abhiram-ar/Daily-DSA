//Write a C program to Skip 2 elements after the occurrence of multiple of five
// timer : 7mint

#include <stdio.h>

int main(){
    int arr[] = {1,3,4,5,6,7,3,10,11,12,41,66,20};
    int size = sizeof(arr)/sizeof(arr[0]);

    for(int i=0; i<size; i++){
        if(arr[i]%5==0){
            printf("%d ",arr[i]);
            i+=2;

            continue;
        }
        printf("%d ",arr[i]);
    }
        return 0;
}