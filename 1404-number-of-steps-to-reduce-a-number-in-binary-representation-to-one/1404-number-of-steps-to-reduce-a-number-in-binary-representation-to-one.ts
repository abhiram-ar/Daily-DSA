function numSteps(s: string): number {
    let num = Array.from(s)
    let count = 0
    while (!(num.length === 1 && num[0] === "1")) {
        if (num[num.length - 1] === "0") num.pop()
        else {
            let i = num.length - 1
            while (i >= 0) {
                if (num[i] === "1") num[i] = "0"
                else {
                    num[i] = "1"
                    break
                }
                i--
            }
            if (num[0] === "0") num.unshift("1")
        }
        count++
    }
    return count
};