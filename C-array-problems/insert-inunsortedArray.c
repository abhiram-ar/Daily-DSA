#include <stdio.h>
int main()
{
    int arr[] = {1,2,4,55,-10,6,14,31};
    int size = sizeof(arr)/sizeof(arr[0]); 

    int position;
    scanf("%d", &position);

    

    for (int i = size-1; i >=0; i--)
    {
        if(i != position-1) arr[i+1] = arr[i];
        else{
            arr[i+1] = arr[i];
            arr[i] = -1;
            break;
        }

    }

    printf("\n");
    for(int i=0; i<size+1;i++) printf("%d ", arr[i]);
       
    return 0;
}
