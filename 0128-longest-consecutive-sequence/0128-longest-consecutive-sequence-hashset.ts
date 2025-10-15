function longestConsecutive(nums: number[]): number {
    const hashset = new Set<number>(nums)
    let longest = 0

    for(let n of hashset){
        if(!hashset.has(n-1)){
            let length = 1
            while(hashset.has(n+length)){
                length++
            }
            longest = Math.max(longest, length)
        }
    }

    return longest
};