#include <stdio.h>
int main()
{
    int arr[] = {10,-1,-5,2,-10,3,21};
    int size= sizeof(arr)/sizeof(arr[0]);

    int ptr = 0;
    for (int i = 0; i < size; i++)
    {   
        if(arr[i] > 0){
            int temp = arr[i];
            for(int j=i; j > ptr;j--) arr[j] = arr[j-1];
            arr[ptr++] = temp;
        }
    }

    for (int i = 0; i < size; i++)
    {
        printf("%d ",arr[i]);
    }
    
    
    return 0;
}