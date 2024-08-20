//Delete two elements after occurrence of a prime number
#include <stdio.h>

int isPrime(int num){
    if(num <= 0 || num==1) return 0;
    for(int i=2; i<=num/2; i++){
        if(num%i == 0) return 0;
    }

    return 1;
}

int main()
{
    int arr[] = {2,4,6,6,10,8,9,5,1,0,10};
    int size = sizeof(arr)/sizeof(arr[0]);

    //for(int i=0; i<size; i++) printf("%d:%d ", arr[i],isPrime(arr[i]));

    for(int i=0; i<size; i++){
        if(isPrime(arr[i])){
            for(int k=0; k<2;k++){
            for(int j=i+1; j<size; j++){
                arr[j] = arr[j+1];
            }
            size--;
            }
           
            // no need to decrement i, because I will be prime and 
            // If condition will always be true and entire array will be flushed
        }
    }

    for (int i = 0; i < size; i++)
    {
        printf("%d " , arr[i]);
    }
    

    return 0;
}
