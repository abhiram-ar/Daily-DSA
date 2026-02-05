function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    const res = []
    let prev = intervals[0]
    let curr
    for (let i = 1; i < intervals.length; i++) {
        curr = intervals[i]
        if(curr[0] > prev[1]){
            res.push(prev)
            prev = curr
        } else{
            prev[1] = Math.max(curr[1], prev[1])
        }
    }
    res.push(prev)
    return res
};