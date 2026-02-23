function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])

    let ans = []
    for (let i = 0; i < intervals.length; i++) {
        if (ans.length === 0) {
            ans.push(intervals[i])
            continue
        }
        if (intervals[i][0] <= ans.at(-1)[1]) ans.at(-1)[1] = Math.max(intervals[i][1], ans.at(-1)[1])
        else ans.push(intervals[i])
    }

    return ans
};