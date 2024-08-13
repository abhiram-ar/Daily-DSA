//Write a program in C to print all unique elements in an array

#include <stdio.h>

int main(int argc, char const *argv[])
{
    int arr[] = {10,7,3,6,22,4,22,6,4,2,2,-10,-99};
    int size = sizeof(arr)/sizeof(arr[0]);
    int checked[100] = {0};
    for (int i = 0; i < size; i++)
    {
        printf("%d ",checked[i]);
    }

    for (int i = 0; i < size-1; i++)
    {
        if(checked[i] == 1) continue;
        int unique = 1;
        for (int j = i+1; j < size; j++)
        {
            if(arr[i]==arr[j]){
                checked[j] = 1;
                unique = 0;
            }
        }
        if(unique==1) printf("\n%d is unique",arr[i]);
        
    }
    
    
    return 0;
}
