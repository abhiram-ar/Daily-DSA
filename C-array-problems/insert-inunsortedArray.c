#include <stdio.h>
int main()
{
    int arr[] = {1,2,4,55,-10,6,14,31};
    int size = sizeof(arr)/sizeof(arr[0]); 
    

    int num,position;
    printf("\nenter insert number and postion: ");
    scanf("%d%d",&num, &position);

    

    for (int i = size-1; i >=0; i--)
    {
        if(i != position-1) arr[i+1] = arr[i];
        else{
            arr[i+1] = arr[i];
            arr[i] = num;
            break;
        }

    }

    printf("\n");
    for(int j=0; j<(size+1) ;j++) printf("%d ", arr[j]);
       
    return 0;
}
