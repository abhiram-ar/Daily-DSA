function majorityElement(nums: number[]): number[] {
    const count = new Map()
    for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) ?? 0) + 1)
    }

    const res = new Set<number>()
    for(let [k,v] of count){
        if(v > (nums.length/3)) res.add(k)
    }

    return Array.from(res)

};