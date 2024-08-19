#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,5,6,7,1,2,4,5,5,6,7,10,5,5};
    int size = sizeof(arr)/sizeof(arr[0]); 

    int isVisited[100] = {0};
    for(int i=0; i<size; i++){
        if(isVisited[i] == 1) continue;

        int freq = 1;
        for(int j=i+1; j<size; j++){
            if(arr[i] == arr[j]){
                freq++;
                isVisited[j] = 1;
            }
        }

        printf("\nfrequecy of %d is : %d", arr[i], freq);
    }
    return 0;
}
