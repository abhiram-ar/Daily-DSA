/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length
    
    let temp
    for(let i=0;i<n-1;i++){
        for(let j=i+1; j<n;j++){
            temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for(let i=0;i<n;i++){
        matrix[i].reverse()
    }
};