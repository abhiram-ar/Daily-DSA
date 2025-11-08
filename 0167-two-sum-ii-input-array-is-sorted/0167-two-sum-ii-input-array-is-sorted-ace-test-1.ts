function twoSum(numbers: number[], target: number): number[] {
    let l = 0
    let r = numbers.length - 1
    let sum: number = 0
    while (l < r) {
        sum = numbers[l] + numbers[r]
        if (sum === target) break
        else if (sum < target) l++
        else r--
    }

    return [l + 1, r + 1]
};