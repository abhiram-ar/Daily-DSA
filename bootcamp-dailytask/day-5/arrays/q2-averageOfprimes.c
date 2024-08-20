#include <stdio.h>

int isPrime(int num){
    if(num <=0 || num == 1) return 0;
    for(int i=2 ; i<=num/2; i++){
        if(num%i==0) return 0;
    }

    return 1;
}

int main()
{
    int arr[] = {1,2,3,4,5,6,7,8,9,10,};
    int size = sizeof(arr)/sizeof(arr[0]);

    float sumPrime=0, countPrime=0;
    for (int i = 0; i < size; i++)
    {
        if(isPrime(arr[i])){
            sumPrime += arr[i];
            countPrime++;
        }
    }

    float avg = sumPrime/countPrime;
    printf("Average of prime is :%f", avg);
       
    return 0;
}