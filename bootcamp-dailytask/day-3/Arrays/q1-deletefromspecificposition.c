#include <stdio.h>
int main()
{
    int arr[] = {1,2,3,4,5,6,7,8,9,10};
    int size = sizeof(arr)/sizeof(arr[0]);

    int pos;
    printf("Enter position to be deleted: ");
    scanf("%d", &pos);

    //main logic
    for (int i = pos-1; i < size-1; i++)
    {
        arr[i] = arr[i+1];
    }
    arr[size] = 0;
    size--;
    
    //display
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    return 0;
}
