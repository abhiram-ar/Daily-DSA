#include <stdio.h>

/*
* * * * * 
*
* * * * * * * * * *
*
*
* * * * * * * * * * * * * * *
*
*
*
* * * * * * * * * * * * * * * * * * * *
*/
void variaton1(int n){
    for(int i=1; i<=n; i++){
        for(int j=1; j<= 5*i ; j++) printf("* ");
        printf("\n");

        if(i != n){
            for(int j=1; j<=i; j++) printf("*\n");
        }
    }
}



/*
*
* * * *
*
*
* * * * * * * *
*
* * * * * * * * * * * *
*
*
*/
void variation2(int n){
    for (int i = 1; i <= n; i++)
    {
        if(i%2 != 0) printf("*\n");
        else printf("*\n*\n");

        if(i != n){
            for(int j=1; j<=i*4; j++)printf("* ");
            printf("\n");
        }
    }
    
}

int main()
{   
    //variaton1(4);  

    //alternatenow variation
    variation2(4);
    return 0;
}
