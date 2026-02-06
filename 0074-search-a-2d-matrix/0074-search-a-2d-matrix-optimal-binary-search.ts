function searchMatrix(matrix: number[][], target: number): boolean {
    let olow = 0
    let ohigh = matrix.length - 1
    let omid

    let size = matrix[0].length - 1
    while (olow <= ohigh) {
        omid = Math.floor((olow + ohigh) / 2)
        if (target >= matrix[omid][0] && target <= matrix[omid][size]) {
            let low = 0
            let high = size
            let mid
            while (low <= high) {
                mid = Math.floor((low + high) / 2)
                if (matrix[omid][mid] === target) return true
                else if (target < matrix[omid][mid]) high = mid - 1
                else low = mid + 1
            }
            return false
        } else if (target < matrix[omid][0]) {
            ohigh = omid - 1
        } else {
            olow = omid + 1
        }
    }

    return false
};