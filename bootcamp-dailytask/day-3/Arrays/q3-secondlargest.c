#include <stdio.h>
#include <limits.h>
int main()
{
    int arr[100], size;
    scanf("%d",&size);

    for (int i = 0; i < size; i++) scanf("%d", &arr[i]);

    int first = INT_MIN;
    int second = INT_MIN;

    for (int i = 0; i < size; i++)
    {
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if(arr[i] > second && arr[i] != first){
            second = arr[i];
        }
        
    }

    
    printf("\nsecond largest : %d", second);

        
    return 0;
}