#include <stdio.h>

int main(int argc, char const *argv[])
{
    int arr[] = {2,4,5,1,2,8,4,8,11,12,11,40,31,22,21,41};
    int size = sizeof(arr)/sizeof(arr[0]);
    int k = 3;

    //sort
    for (int i = 0; i < size; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            //change relattion to "arr[i]<arr[j]" to sort in decenting order
            if(arr[i]>arr[j]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
    }

    // just for vizualization
    printf("sorted arr:");
    for(int i=0;i<size;i++)printf("%d ",arr[i]);

    //finding kth unique element
    for (int i = 0; i < size; i++)
    {
        if(arr[i]!= arr[i+1]) k--;

        if(k<=1) {
            printf("\nKth element is : %d",arr[i+1]);
        break;
        }
    }
    
    
    return 0;
}
