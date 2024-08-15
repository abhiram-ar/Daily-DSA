#include <stdio.h>
int main()
{
    int size; 
    int arr[100];
    scanf("%d", &size);
    
    for(int i=0; i<size;i++) scanf("%d", &arr[i]);
    
    
    for(int i=0; i<size; i++){
        if(arr[i] < 0) arr[i] = 0;
    }

    
    for(int i=0; i<size; i++) printf("%d ", arr[i]);
    
    return 0;
}
