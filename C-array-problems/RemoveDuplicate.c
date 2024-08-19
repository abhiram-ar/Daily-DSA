#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,1,2,5,6,6,6,7,8,7};
    int size = sizeof(arr)/sizeof(arr[0]);

    for (int i = 0; i < size; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            if(arr[i] == arr[j]){
                for(int k=j; k<size;k++){
                    arr[k] = arr[k+1];
                }
                size--;
                j--; //the element we shifted may be duplicate, so a minor correction to check that also
            }
            
        }
        
    }

    for(int i=0; i<size; i++) printf("%d ", arr[i]);
       
    return 0;
}