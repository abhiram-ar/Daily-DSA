#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,5,-1,10,11,12,13,0};
    int size = sizeof(arr)/sizeof(arr[0]);
   
    int isprime;
    for (int i = 0; i < size; i++)
    {
        isprime = 1;
        if(arr[i] <= 0 || arr[i] == 1) isprime = 0;
        else{
            for (int j = 2; j <= arr[i]/2; j++)
            {
                if(arr[i]%j == 0){ 
                    isprime = 0;
                    break;
                }
            }    
        }
        if(isprime) printf("%d ", arr[i]);

    }
    

    return 0;
}
