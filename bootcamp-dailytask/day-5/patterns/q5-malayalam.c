#include <stdio.h>
/*
M
MA
MAL
MALA
MALAY
MALAYA
MALAYAL
MALAYALA
MALAYALAM
*/
int main()
{
    char str[] = "MALAYALAM";
    for (int i = 1; i <=9; i++)
    {
        for(int j=0; j<i; j++) printf("%c", str[j]);
        printf("\n");
    }
       
    return 0;
}