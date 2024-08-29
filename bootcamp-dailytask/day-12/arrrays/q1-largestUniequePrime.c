#include <stdio.h>
#include <limits.h>

int isPrime(int num){
    if(num <= 0 || num == 1) return 0;
    for (int i = 2; i <= num/2; i++)
    {
        if(num%i==0) return 0;
    }

    return 1;
    
}

int main()
{
    int arr[] = {1,2,3,4,6,7,8,9,10,11,12,13,14,13,15};
    int size = sizeof(arr)/sizeof(arr[0]);
    int largestPrime = INT_MIN;

    for (int i = 0; i < size; i++)
    {
        if(isPrime(arr[i]) == 1){
            int freq = 0;
            for(int j=0; j<=size; j++){
                if(arr[j] == arr[i]){
                    freq++;
                }
            }
            if(freq == 1 && arr[i] > largestPrime) largestPrime = arr[i];

        }
    }

    printf("largest prime : %d", largestPrime);
       
    return 0;
}