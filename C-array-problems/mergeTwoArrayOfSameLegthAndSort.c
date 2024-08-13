// Write a program in C to merge two arrays of the same size sorted in descending order
// 12 minutes
#include <stdio.h>

int main(){
    int arr1[]= {2,5,1,0,8};
    int arr2[] = {6,4,7,3,1};
    int size = sizeof(arr1)/sizeof(arr1[0]);
    int arr3[100];

    for(int i=0; i<size;i++){
        arr3[i]=arr1[i];
        arr3[i+size]=arr2[i];
    }  

    for (int i = 0; i < 2*size-1; i++)
    {
        for (int j = i+1; j < 2*size; j++)
        {
            if(arr3[i]<arr3[j]){
                int temp = arr3[i];
                arr3[i] = arr3[j];
                arr3[j] = temp;
            }
        }
        
    }
    
    for(int i=0;i<2*size;i++) printf("%d ",arr3[i]);
    return 0;
}