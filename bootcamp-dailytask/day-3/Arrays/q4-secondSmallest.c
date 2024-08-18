#include <stdio.h>
#include <limits.h>
int main()
{
    int arr[100], size;
    printf("Enter the array size : ");
    scanf("%d", &size);

    int first = INT_MAX;
    int second = INT_MAX;

    for (int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);

        if(arr[i] < first){
            second = first;
            first = arr[i];
        }
        else if(arr[i] < second && arr[i] != first) second = arr[i];
    }


    printf("secnond smallest element : %d", second);
        
    return 0;
}