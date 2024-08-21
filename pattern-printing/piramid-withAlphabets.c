#include <stdio.h>
int main()
{
    int n = 4;
    for(int i=1 ; i<=n ; i++){
        for(int j=1; j<=n-i; j++) printf(" ");

        int k = 0;
        for(int j=1; j<=2*i-1 ; j++){
            if(j<i){
            printf("%c", 65+(k++));
            }
            else printf("%c",65 + k--);

        }
        printf("\n");
    }   
    return 0;
}