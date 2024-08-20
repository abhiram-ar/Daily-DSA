#include <stdio.h>

void getArray(int size, int arr[size][size]){
    
    for(int i=0; i<size;i++){
        for(int j=0; j<size; j++) scanf("%d", &arr[i][j]);
    }

}

void addArray(int size, int arr1[size][size], int arr2[size][size], int sum[size][size]){
    for(int i=0; i<size;i++){
        for(int j=0; j<size; j++){
            sum[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
}


void displayArray(int size, int arr[size][size]){
    for(int i=0; i<size;i++){
        for(int j=0; j<size; j++){
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }
}

int main()
{
    int size;
    printf("enter size of array: ");
    scanf("%d", &size);
    
    int arr1[size][size], arr2[size][size], sum[size][size];
    
    printf("enter values of arr1 :\n");
    getArray(size, arr1);

    printf("\nenter values of arr2 :\n");
    getArray(size, arr2);

    //add
    addArray(size, arr1, arr2, sum);

    //display
    printf("\nsum of arrays is :\n");
    displayArray(size, sum);


    return 0;
}