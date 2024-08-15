#include <stdio.h>

int main(int argc, char const *argv[])
{
    int arr[100] = {1,2,3,4,4,7,8,10,20,21,31};
    int size = 11;
    int ielement = -1;

    for (int i = 0; i < size; i++)
    {
        printf("%d ",arr[i]);
    }
    printf("\n");

    //dont start from size, because it will be 0 by default
    for (int i = size-1; i >= 0; i--)
    {
        //edge condition
        if(i==0){
            arr[0]=ielement;
            break;
        }

        //main logic
        if(arr[i]>ielement) arr[i+1] = arr[i];
        else{
            arr[i+1] = ielement;
            break;
        }
    }
        

    for (int i = 0; i < size+1; i++)
    {
        printf("%d ",arr[i]);
    }
    
    return 0;
}
