#include <stdio.h>

//Leftside triangle
void variation1(int n ){
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0;j <=i; j++)
        {
            printf("%d", (j+1)%2 ); //or (j%2) if you want to start from 0 insted of 1 
        }
        printf("\n");
    }
}


//rightsided triangle
void variation2(int n){
    for (int i = 0; i < n; i++)
    {
        //space
        for(int j=0; j<n-i-1; j++)printf(" ");

        //*
        for(int j=0; j<=i; j++) printf("%d", j%2);
        printf("\n");
    }
}


//triangle On both side
void variation3(int n){
    for (int i = 0; i < n; i++)
    {
        for(int j=0; j<=i; j++) printf("%d", j%2);
        for(int j=0; j<2*(n-i-1); j++) printf(" ");
        for(int j=0; j<=i; j++) printf("%d", (j)%2);
        printf("\n");

        //try alternative with less loops
    }
}


int main(int argc, char const *argv[])
{
    int n = 4;

    printf("\n------Leftside triangle------\n");
    variation1(n);


    printf("\n------rightsided triangle------\n");
    variation2(n);

    printf("\n------triangle On both side------\n");
    variation3(5);
    return 0;
}
