// Write a program to count the frequency of each element of an array. Delete the element if frequency is greater than half the size of array
// note : there would be only 1 elemnt whose count > size/2 in a array
#include <stdio.h>
int main()
{
    int arr[] = {1,1,2,3,1,1,1};
    int size = sizeof(arr)/sizeof(arr[0]);
    int toDelete;
    int visited[100] ={0};

    for (int i = 0; i < size; i++)
    {      
        if(visited[i]==1)continue;

        int freq = 0;
        for(int j=1; j<size ; j++){
            if(arr[j] == arr[i]) 
            {
                freq++;
                visited[j] = 1;
            }
        }

        printf("\nfrequecy of %d : %d", arr[i], freq);

        if(freq > size/2){
            toDelete = arr[i];
        }
    }


    printf("\n\nElemet to delete : %d", toDelete);

    //detele the element whose count > size/2
    for(int j=0; j<size; j++){
        if(arr[j] == toDelete){
            for(int k=j; k<size-1;k++) arr[k] = arr[k+1];
            size--;
            j--;
        }
    }
    

    printf("\n\narray elem :");
    for(int i=0; i<size; i++ ) printf("%d ", arr[i]);
    
    return 0;
}  