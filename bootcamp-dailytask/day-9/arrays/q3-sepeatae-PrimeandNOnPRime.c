#include <stdio.h>

int isPrime(int num){
    if(num <=0 || num==1)return 0;
    for(int i=2; i<=num/2; i++){
        if(num%i==0) return 0;
    }
    return 1;
}

int main()
{
    int arr[] = {1,2,3,4,5,6,7,8,9,10,11};
    int size = sizeof(arr)/sizeof(arr[0]);

    int prime[100];
    int nonPrime[100];
    int primeIndex=0, nonPrimeIndex=0;

    for(int i=0; i<size; i++){
        if(isPrime(arr[i])){
            prime[primeIndex++] = arr[i];
        }
        else{
            nonPrime[nonPrimeIndex++] = arr[i];
        }
    }  

    printf("prime: ");
    for(int i=0; i<primeIndex; i++)printf("%d ",prime[i]);

    printf("\nNon-prime: ");
    for(int i=0; i<nonPrimeIndex; i++)printf("%d ",nonPrime[i]);  
    return 0;
}