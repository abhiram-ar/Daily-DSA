function subarraySum(nums: number[], k: number): number {
    let prefixMap = new Map()
    let count = 0
    let cummSum = 0
    for (let i = 0; i < nums.length; i++) {
        cummSum += nums[i]
        if (cummSum === k) {
            count++
        }

        let rem = cummSum - k
        if (prefixMap.has(rem)) {
            count += prefixMap.get(rem)
        }

        // we need to longest subarry, so we avoid overriding the 
        // earlier prexifSum idx with newer idx

        prefixMap.set(cummSum, (prefixMap.get(cummSum) ?? 0) + 1)

    }
    return count
};