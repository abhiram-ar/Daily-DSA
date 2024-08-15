#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);
    switch (n)
    {
    case 1:
        printf("Monday");
        break;

    case 2:
        printf("Tuesday");
        break;

    case 3:
        printf("Wednesday");
        break;

    case 4:
        printf("Thursday");
        break;

    case 5:
        printf("Friday");
        break;

    case 6:
        printf("Satuday");
        break;
    
    case 7:
        printf("Sunday");
        break;

    default:
        printf("invalid entry");
        break;
    }    
    return 0;
}
