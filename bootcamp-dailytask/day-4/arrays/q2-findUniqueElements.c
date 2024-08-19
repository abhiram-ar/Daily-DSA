#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,5,2,3,4,20,-1,2,23};
    int size = sizeof(arr)/sizeof(arr[0]);

    int isVisited[100] = {0};
    for (int i = 0; i < size; i++)
    {
        if(isVisited[i] == 1) continue;

        int isUnique = 1;
        for (int j = i+1; j < size; j++)
        {
            if(arr[i] == arr[j]){
                isUnique = 0;
                isVisited[j] = 1;
            }
        }
        if(isUnique == 1) printf("%d ", arr[i]);
        
    }
        
    return 0;
}