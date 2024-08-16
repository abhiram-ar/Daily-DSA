#include <stdio.h>
int main()
{
    int WrittenTestScore, LabExamScore, AssignmentScore; 
    printf("Enter Written Test score: ");
    scanf("%d", &WrittenTestScore);

    printf("Enter Lab Exam score: ");
    scanf("%d", &LabExamScore); 

    printf("Enter Assignment score: ");
    scanf("%d", &AssignmentScore);

    float grade = (WrittenTestScore*70 + LabExamScore*20 + AssignmentScore*10)/100;
    printf("Grade of student is : %f ", grade);
    return 0;
}