#include <stdio.h>
int main()
{
    int arr[100], size;
    printf("Enter array size and elements : ");
    scanf("%d", &size);
    for(int i=0;i<size; i++) scanf("%d", &arr[i]);

    //arr = {1,2,2,3,5,7,20,-10,22,31}    size=10
    
    int p, element;
    printf("Enter element and poistion to be inserted: ");
    scanf("%d%d", &element, &p);

    for (int i=size; i >= 0; i--)
    {
        if(p-1 != i) arr[i+1] = arr[i];
        else {
            arr[i+1] = arr[i];
            arr[i] = element;
            break;
        }

    }
    
    for(int i=0;i<size+1; i++) printf("%d ", arr[i]);
    
    return 0;
}