#include <stdio.h>
/*
1 
3 2 
6 5 4 
10 9 8 7 
*/
int main()
{
    int n=4;
    int count = 0;
    for (int i = 1; i <=4 ; i++)
    {
        count += i; //the number begining in each line
        for(int j=count; j>count-i; j--){
            printf("%d ", j);
        }
        printf("\n");
    }
        
    return 0;
}