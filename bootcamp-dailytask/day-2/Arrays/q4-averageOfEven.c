#include<stdio.h>
int main(){
    int arr[100], size;
    printf("enter size and array elements: \n");
    scanf("%d", &size);
    
    int evenSum=0, evenCount=0;
    for(int i=0; i<size; i++) {
        scanf("%d", &arr[i]);
        if(arr[i]%2==0){
            evenSum += arr[i];
            evenCount++;
        }    
    }

    printf("Sum of even elements is: %d", (evenSum/evenCount));
    
    return 0;
}