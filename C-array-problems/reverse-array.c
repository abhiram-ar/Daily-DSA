#include <stdio.h>

void reverse2pointer (int arr[], int size){
    int l = 0;
    int r = size -1;

    int temp;
    while (l<r){
        temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
}


int main(int argc, char const *argv[])
{
    int a[] = {10,7,3,6,22,4,6,4,2,2};
    int size = sizeof(a)/(sizeof(a[0]));

    reverse2pointer(a, size);
    for(int i=0; i<10; i++){
        printf("%d ", a[i]);
    }


    return 0;
}
