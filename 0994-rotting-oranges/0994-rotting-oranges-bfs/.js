/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let n = grid.length
    let m = grid[0].length
    let rottenq = []
    let freshCount = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) rottenq.push([i, j, 0])
            if (grid[i][j] === 1) freshCount++
        }
    }

    let deltaY = [1, 0, 0, -1]
    let deltaX = [0, 1, -1, 0]
    let visited = new Array(n).fill().map(() => [])
    let freshRottened = 0
    let maxTime = 0
    while (rottenq.length > 0) {
        let tomato = rottenq.shift()
        let i = tomato[0]
        let j = tomato[1]
        let time = tomato[2]
        maxTime = Math.max(time, maxTime)
        for (let d = 0; d < 4; d++) {
            let nigI = i + deltaY[d]
            let nigJ = j + deltaX[d]

            if (nigI < n && nigI >= 0 && nigJ < m && nigJ >= 0 && !visited[nigI][nigJ] && grid[nigI][nigJ] === 1) {
                rottenq.push([nigI, nigJ, time + 1])
                visited[nigI][nigJ] = true
                freshRottened++
            }
        }
    }
    return freshRottened === freshCount ? maxTime : -1
}