#include <stdio.h>
int main()
{
    int arr1[] = {10,12,14,1};
    int size1 = sizeof(arr1)/sizeof(arr1[0]);

    int arr2[] = {-10,1,54};
    int size2 = sizeof(arr2)/sizeof(arr2[0]);

    int mergeSort[100];
    int indexPtr;

    for(int i=0; i<size1; i++){
        mergeSort[indexPtr++] = arr1[i];
    }
    for(int i=0;i<size2;i++){
        mergeSort[indexPtr++] = arr2[i];
    }

    for(int i=0; i<=size1+size2; i++){
        for(int j=i+1; j<=size1+size2; j++){
            if(mergeSort[j] < mergeSort[i]){
                int temp=mergeSort[i];
                mergeSort[i] = mergeSort[j];
                mergeSort[j] = temp;
            }
        }
    }

    for(indexPtr=0; indexPtr<size1+size2; indexPtr++){
        printf("%d ",mergeSort[indexPtr]);
    }
    return 0;
}