#include <stdio.h>
#include <limits.h>

int main()
{
    int arr[100], size;
    scanf("%d", &size);

    for(int i=0; i<size; i++) scanf("%d", &arr[i]);

    int max = INT_MAX;
    for(int i = 0; i< size; i++){
        if(arr[i] < max) max = arr[i];
    }

    printf("Smallest element: %d", max);

    return 0;
}
