#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,1,2,3,2,2,5,6};
    int size = sizeof(arr)/sizeof(arr[0]);

    int visited[100] = {0};

    int toDelete[100];
    int delIndex=0;

    for (int i = 0; i < size; i++)
    {       
        if(visited[i] == 1) continue;

        int freq=0;
        for (int j = i; j < size; j++)
        {
            if(arr[i] == arr[j]){ 
                freq++;
                visited[j] = 1;
            }
        }

        if(freq % 2 == 0){
            printf("freq of %d : %d\n", arr[i], freq);
        }
        else{
            toDelete[delIndex++] = arr[i];
        }
    }

    printf("\nto delete : ");
    for(int i=0; i<delIndex; i++) printf("%d ", toDelete[i]);



    for (int  i = 0; i < delIndex; i++)
    {
        int del = toDelete[i];
        for(int j=0; j<size; j++){
            if(arr[j] == del){
                for(int k=j; k<size-1;k++) arr[k] = arr[k+1];
                size--;
                j--;
            }
        }
    }
    

    printf("\n\nNew Array Elemetns: ");
    for(int i=0; i<size; i++) printf("%d ", arr[i]);
       
    return 0;
}