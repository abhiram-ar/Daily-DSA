#include <stdio.h>
int main()
{
    int arr[100], size;
    printf("enter array size :");
    scanf("%d", &size);

    for(int i=0; i<size; i++) scanf("%d", &arr[i]);

    //two pointer approch to reverse
    int l = 0;
    int r = size-1;

    int temp;
    while(l<=r){
        temp=arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }


    for(int i=0; i<size; i++) printf("%d ", arr[i]);

    return 0;
}
