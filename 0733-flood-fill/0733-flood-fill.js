/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let visited = new Array(image.length).fill().map(() => [])
    let scolor = image[sr][sc]

    let queue = [[sr, sc]]
    image[sr][sc] = color


    let pixle
    let deltaR = [0, 1, 0, -1]
    let deltaC = [1, 0, -1, 0]
    while (queue.length > 0) {
        pixle = queue.shift()
        for (let i = 0; i < 4; i++) {
            let newR = pixle[0] + deltaR[i]
            let newC = pixle[1] + deltaC[i]
            if (newR < image.length && newR >= 0 && newC < image[0].length && newC >= 0 && !visited[newR][newC] && image[newR][newC] === scolor) {
                image[newR][newC] = color
                visited[newR][newC] = true
                queue.push([newR, newC])
            }
        }
    }
    return image
};