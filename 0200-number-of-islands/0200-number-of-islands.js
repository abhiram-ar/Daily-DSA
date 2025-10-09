/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let adjI = new Map()

    let r = grid.length
    let c = grid[0].length

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {

            if (grid[i][j] !== "1") continue

            let adj = []
            let key = `${i}|${j}` // delimiter is imp: because i=1,12 and j = 3,23 has same key

            if (grid[i - 1]?.[j] === "1") {
                adj.push(`${i - 1}|${j}`)
            }

            if (grid[i]?.[j - 1] === "1") {
                adj.push(`${i}|${j - 1}`)
            }

            if (grid[i]?.[j + 1] === "1") {
                adj.push(`${i}|${j + 1}`)
            };

            if (grid[i + 1]?.[j] === "1") {
                adj.push(`${i + 1}|${j}`)
            }

            adjI.set(key, adj)

        }
    }
    const visited = {}
    let count = 0

    for (let i of adjI.keys()) {
        if (visited[i]) continue
        count++
        let stack = [i];
        let res = [];

        while (stack.length > 0) {
            let node = stack.pop();
            if (visited[node]) continue
            visited[node] = true;
            for (let neighbor of adjI.get(node) ?? []) {
                // Check if neighbor is not visited before pushing
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                }
            }
        }
    }

    return count
};