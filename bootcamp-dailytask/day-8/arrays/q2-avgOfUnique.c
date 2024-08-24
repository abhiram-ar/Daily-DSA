#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,5,3,4,5};
    int size = sizeof(arr)/sizeof(arr[0]);

    int visited[100] = {0};
    int avgSum=0,avgCount=0;

    for(int i=0; i<size; i++){
        if(visited[i] == 1) continue;

        int isUnique = 1;
        for(int j=i+1; j<size; j++){
            if(arr[j] == arr[i]){
                isUnique = 0;
                visited[j] = 1;
            }
        }
        if(isUnique == 1){
            avgSum += arr[i];
            avgCount++;
        }
    } 

    float avg = (float)avgSum/avgCount;
    printf("average of unique = %.2f", avg);   
   return 0;
}