//Write a C program to count the frequency of each element in an array 


#include <stdio.h>

int main(int argc, char const *argv[])
{
    int arr[] = {10,7,3,6,22,4,22,6,4,2,2,-10,-99,2};
    int size = sizeof(arr)/sizeof(arr[0]);
    int freq[100];
    for (int i = 0; i < 100; i++) freq[i] = -1;
    

    int count;
    for (int i = 0; i < size-1; i++)
    {   
        count = 1;
        for (int j = i+1; j < size; j++)
        {
            if(arr[i]==arr[j]) {
                count++;
                freq[j] = 0;
            }
        }
        if(freq[i] != 0){
            freq[i] = count;
        }
        
        
    }

    for (int i = 0; i < size; i++)
    {
        if(freq[i] != 0){
            printf("freqeucty of %d is : %d",arr[i],freq[i]);
            printf("\n");
        }
    }
    
     

    return 0;
}
