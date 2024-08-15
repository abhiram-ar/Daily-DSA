#include <stdio.h>
int main()
{
    float totalMark;
    scanf("%f",&totalMark);
    char grade;
    if(totalMark>= 90) grade = 'A';
    else if(totalMark >= 80) grade = 'B';
    else if(totalMark >= 70) grade = 'C';
    else if(totalMark >= 60) grade = 'D';
    else if(totalMark >= 50) grade = 'E';
    else grade = 'F';

    if (grade == 'F') printf("failed");
    else printf("grade is %c", grade);
    return 0;
}
