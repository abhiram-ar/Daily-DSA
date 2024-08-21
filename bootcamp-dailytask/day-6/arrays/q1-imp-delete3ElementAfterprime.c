#include <stdio.h>

int isPrime(int num){
    if(num<=0 || num == 1) return 0;
    for(int i=2; i<= num/2 ; i++){
        if(num%i==0) return 0;
    }

    return 1;
}

int main()
{
    int arr[] = {1,2,4,6,7,8,9,10,11,12,20,22,21,1};
    int size = sizeof(arr)/sizeof(arr[0]);

    for(int i=0; i<size; i++){
        if(isPrime(arr[i])){
            for(int k=0; k<3;k++){

                for(int j=i+1; j<size; j++){
                    arr[j] = arr[j+1];
                }
                size--;

            }
        }
    }   

    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    
    return 0;
}