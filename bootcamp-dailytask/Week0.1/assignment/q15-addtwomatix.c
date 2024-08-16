#include <stdio.h>
int main()
{
    int row, col;
    printf("Enter row and colum: ");
    scanf("%d%d", &row, &col);

    int arr1[row][col], arr2[row][col], sumArr[row][col];

    printf("\nenter matrix 1\n");
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            scanf("%d", &arr1[i][j]);
        }
    }  

    printf("\nenter matrix 2\n");
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            scanf("%d", &arr2[i][j]);
        }
    }

    printf("\nSum of arrys is \n");
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            sumArr[i][j] = arr1[i][j] + arr2[i][j];
            printf("%d ", sumArr[i][j]);
        }
        printf("\n");
    } 

    return 0;
}
