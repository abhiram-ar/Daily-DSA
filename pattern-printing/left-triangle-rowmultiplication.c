#include <stdio.h>
/*
2 * 
3 * 9
4 * 12 *
5 * 15 * 25
6 * 18 * 30 *
*/
int main()
{
    int num =5;
    for(int i=0; i<5; i++){
        int num = i+2;

        //remember for this type of number problems,
        //use loops to determine no of elements and do seprate
        //condition for printing
        for (int j = 0; j < i+2; j++)
        {
            if(j%2== 0){
                printf("%d ",num*(j+1));
            }
            else {
                printf("* ");
            }

        }
        printf("\n");
        
    }    
    return 0;
}
