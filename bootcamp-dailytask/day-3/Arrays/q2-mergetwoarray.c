#include <stdio.h>
int main()
{
    int arr1[] = {1,2,3,4,5,6,7,8,9,10};
    int arr2[] = {10,9,8,7,6,5,4,3,2,1};
    int size = sizeof(arr1)/sizeof(arr1[0]);
    int res[size];

    
    
    for (int i = 0; i < size; i++)
    {
        res[i]= arr1[i] + arr2[i];
    }
    
    
    //display
    for (int i = 0; i < size; i++)
    {
        printf("%d ", res[i]);
    }
    return 0;
}
