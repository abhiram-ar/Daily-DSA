#include <stdio.h>
/*

123454321
1234321
12321
121
1

*/
int main()
{
    int n=5;
    for (int i = 1; i <=n; i++)
    {
        int k=1;
        for(int j=1; j<=2*(n-i) + 1; j++){
            if(j< n-i +1) printf("%d", k++);
            else printf("%d",k--);
        }
        printf("\n");
    }
       
    return 0;
}