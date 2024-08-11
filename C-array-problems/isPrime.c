#include <stdio.h>
#include <stdbool.h>


bool isPrime(int num){
    if(num<0 || num == 0 || num == 1) return false;
    for (int i = 2; i <= num/2; i++)
    {
        if(num%i == 0) return false;
    }
    return true;
    
}

int main(int argc, char const *argv[])
{   
    for(int num = 0; num<100; num++){
        //int num = 4;
        bool prime = isPrime(num);

        if (prime) printf("%d is prime", num);
        else printf("%d number is not prime", num);
        printf("\n");
    }
    return 0;
}
