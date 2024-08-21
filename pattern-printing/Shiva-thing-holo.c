#include <stdio.h>
#include <stdlib.h>

/*
*********
 *     *
  *   *
   * *
    *
   * *
  *   *
 *     *
*********
*/

int min (int a , int b){
    return a < b ? a : b;
}



int main() {
   int n = 5;

   for(int i = 0; i < 2*n -1; i++){
    if(i<n){
        for(int j=0 ; j<i; j++){
            printf(" ");
        }
        for(int j=0; j<2*(n-i) -1 ; j++){
            if(j==0 || j==2*(n-i)-2 || i==0){
            printf("*");
            }
            else printf(" ");
        }
        printf("\n");
    }
    else{
        int vrow = i - n;
        for(int j=0; j< (n-1)-vrow-1; j++){
            printf(" ");
        }
        for(int j=0; j< 2*(vrow+1) + 1; j++){
            if(j==0 || j==2*(vrow+1)|| i== 2*n-2){
            printf("*");
            }
            else printf(" ");
        }
        printf("\n");

    }
   }
}
