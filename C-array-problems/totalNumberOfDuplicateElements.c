//Write a program in C to count the total number of duplicate elements in an array

#include <stdio.h>

int main(int argc, char const *argv[])
{
    int arr[] = {10,7,3,6,22,4,22,6,4,2,2,-10,-99,2};
    int size = sizeof(arr)/sizeof(arr[0]);

    int count = 0;
    for (int i = 0; i < size-1; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            if(arr[i]==arr[j]){
                count++;
                break; 
                // we break and  start from next rather than using flag

            }
        }
        
    }
    printf("Total number of duplicate elements: %d",count);
    
    return 0;
}
