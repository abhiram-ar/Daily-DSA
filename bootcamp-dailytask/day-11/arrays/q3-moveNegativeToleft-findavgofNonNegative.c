//Write a program to count all negative numbers and move to beginning of a given array and find average of non-negative numbers
#include <stdio.h>
int main()
{
    int arr[] = {0,1,-1,2,-3,10,20};
    int size = sizeof(arr)/sizeof(arr[0]);

    int sumOfPositive=0,positiveCount=0;
    int lptr=0;
    for (int i = 0; i < size; i++)
    {
        if(arr[i] < 0){
            int negNumber = arr[i];
            for(int j=i; j>lptr; j--) arr[j] = arr[j-1];
            arr[lptr++] = negNumber; 
        }
        else if(arr[i] > 0){
            sumOfPositive += arr[i];
            positiveCount++;
        }
    }

    for (int  i = 0; i < size; i++)
    {
        if(arr[i] > 0){
            sumOfPositive += arr[i];
            positiveCount++;
        }
    }
    

    printf("array elemts : ");
    for(int i=0; i<size; i++) printf("%d ",arr[i]);
    

    float avgofPositive = (float) sumOfPositive/positiveCount;
    printf("\naverage of non-neg : %f", avgofPositive);
    return 0;
}