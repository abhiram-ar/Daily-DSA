#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,3,3,4,5,5,6,7,6,6,7,6,8,9,7};
    int size = sizeof(arr)/sizeof(arr[0]);

    int visited[100] = {0};

    for (int i = 0; i < size; i++)
    {
        if(visited[i] == 1) continue;

        int count = 1;
        for (int j = i+1; j < size; j++)
        {
            if(arr[i] == arr[j]){
                count++;
                visited[j] = 1;
            }
        }

        if(count == 3) printf("%d ", arr[i]);
        
    }
       
    return 0;
}