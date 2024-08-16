#include <stdio.h>
int main()
{
    int arr[100], size;
    printf("Enter arr size and elements: ");
    scanf("%d", &size);

    int oddSum=0, oddCount=0;
    for(int i=0; i<size; i++) {
        scanf("%d", &arr[i]);
        if(arr[i]%2==0){
            oddSum += arr[i];
            oddCount++;
        }    
    }

    //dont calculate avg in printf, wired error
    float oddAvg = (oddSum/oddCount);
    printf("Average of odd elements is : %f", oddAvg);

    return 0;
}
