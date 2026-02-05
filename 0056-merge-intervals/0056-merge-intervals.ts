function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    const res = []
    res.push(intervals[0])
    let curr
    for (let i = 1; i < intervals.length; i++) {
        curr = intervals[i]
        if (curr[0] > res[res.length - 1][1]) {
            res.push(curr)
        } else {
            res[res.length - 1][1] = Math.max(curr[1], res[res.length - 1][1])
        }
    }
    return res
};