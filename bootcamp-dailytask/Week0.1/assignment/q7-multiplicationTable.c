#include <stdio.h>
int main()
{
    int num;
    printf("enter a number :");
    scanf("%d", &num);

    for(int i=1; i<=10;i++){
        printf("\n%d x %d = %d", i,num,i*num);
    }


    return 0;
}
