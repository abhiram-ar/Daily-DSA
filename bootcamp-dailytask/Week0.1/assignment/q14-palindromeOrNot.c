#include <stdio.h>
int main()
{
    char str[100];
    gets(str);

    //finding string length;
    int length=0;
    for (int i = 0; i < 100; i++)
    {
        if(str[i] != '\0') length++;
        else break; 
    }

    //palindrom or not check
    int l = 0;
    int r = length - 1;
    int ispalindrome = 1;

    while (l<=r)
    {
        if(str[l] != str[r]){
            ispalindrome = 0;
            break;
        }
        else{
            l++;
            r--;
        }

    }
    if(ispalindrome == 1) printf("Entered string is palindrome");
    else printf("Entred string is not palindrome");

    return 0;
}
