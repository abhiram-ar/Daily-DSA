#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);

    int arr[100];
    int index = -1;
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    int element;
    printf("enter element to find index of :");
    scanf("%d", &element);
    for (int i = 0; i < n; i++)
    {
        if(arr[i]== element){
            index = i;
            break;
        }
    }

    if(index != -1){
        printf("element found at index : %d", index);
    }
    else printf("element not found");
    

    return 0;
}
