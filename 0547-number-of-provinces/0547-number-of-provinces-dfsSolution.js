/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let count = 0
    let visited = new Array(isConnected.length).fill(false)

    for (let i = 0; i < isConnected.length; i++) {
        if(!visited[i]){
            dfs(i, visited)
            count++
        }
    }

    return count

    function dfs(start, visited) {
        let stack = [start]
        let node
        while (stack.length > 0) {
            node = stack.pop()
            if (visited[node]) continue
            visited[node] = true
            for (let end = 0; end < isConnected.length; end++) {
                if (isConnected[node][end] === 0) continue
                if (!visited[end]) stack.push(end)
            }
        }
    }
};