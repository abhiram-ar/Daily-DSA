#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,5,6,7,8,9,10,11,12,13};
    int size = sizeof(arr)/sizeof(arr[0]);

    //shift multiple of 3 to left
    int ptr=0;
    for (int i = 0; i < size; i++)
    {
        if(arr[i] % 3 == 0){
            int temp = arr[i];
            for(int j=i; j>ptr;j--) arr[j] = arr[j-1];
            arr[ptr++] = temp;
        }
    }

    //remove multiple of 2
    for (int i = 0; i < size; i++)
    {
        if(arr[i]%2==0){
            for(int j=i; j<size-1; j++) arr[j] = arr[j+1];
            size--;
            i--;
        }
    }
    


    for(int i=0; i<size; i++) printf("%d ", arr[i]);
       
    return 0;
}