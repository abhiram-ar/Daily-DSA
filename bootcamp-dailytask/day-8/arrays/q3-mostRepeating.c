#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,5,3,4,5,5,1,1,1,2};
    int size = sizeof(arr)/sizeof(arr[0]);

    int mostRepeating;
    int maxCount=0;
    int visited[100] = {0};

    for(int i=0; i<size; i++){
        if(visited[i] == 1) continue;

        int count = 1;
        for(int j=i+1; j<size; j++){
            if(arr[j] == arr[i]){
                count++;
                visited[j] = 1;
            }
        }
        if(count > maxCount){
            maxCount = count;
            mostRepeating = arr[i];
        }
    } 

    printf("most repaeting = %d", mostRepeating);   
   return 0;
}