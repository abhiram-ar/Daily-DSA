#include <stdio.h>
int main()
{
    int income;
    printf("Enter income amount : ");
    scanf("%d", &income);
    
    int taxRate;

    if(income <= 250000) taxRate = 0;
    else if(income > 250000 && income <= 500000) taxRate = 5;
    else if(income > 500000 && income <= 1000000) taxRate = 20;
    else if(income > 1000000 && income <= 5000000) taxRate = 30;
    else{
        printf("out of range");
        return 0;
    } 
    
    float tax = income * taxRate/100;
    printf("Income tax amount : %f", tax);
    
    return 0;


}