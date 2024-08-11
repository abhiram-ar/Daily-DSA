#include <stdio.h>

int main() {
    int i, j, space, rows = 9;
    
    // Upper half of the pattern
    for(i = 1; i <= rows; i++) {
        // Printing spaces
        for(space = 1; space <= rows-i; space++) {
            printf(" ");
        }
        // Printing stars
        for(j = 1; j <= (2*i - 1); j++) {
            printf("* ");
        }
        printf("\n");
    }

    // Lower half of the pattern
    for(i = rows-1; i >= 1; i--) {
        // Printing spaces
        for(space = 1; space <= rows-i; space++) {
            printf(" ");
        }
        // Printing stars
        for(j = 1; j <= (2*i - 1); j++) {
            printf("* ");
        }
        printf("\n");
    }

    return 0;
}
