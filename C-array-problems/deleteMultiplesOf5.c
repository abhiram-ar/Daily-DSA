#include <stdio.h>
int main()
{
    int arr[] = {5,1,2,3,4,5,6,10,12,15,31,55};
    int size = sizeof(arr)/sizeof(arr[0]);

    for (int i = 0; i < size; i++)
    {
        if(arr[i]%5 == 0){
            for(int j=i; j< size-1; j++) arr[j] = arr[j+1];
            size--;
        }
    }

    for(int i=0; i<size; i++) printf("%d ",arr[i]);
        
    return 0;
}