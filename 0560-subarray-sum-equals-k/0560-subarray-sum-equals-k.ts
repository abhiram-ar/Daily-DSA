function subarraySum(nums: number[], k: number): number {
    let prefixMap = new Map<number, number>();

    prefixMap.set(0, 1);

    let count = 0;
    let cummSum = 0;

    for (let i = 0; i < nums.length; i++) {
        cummSum += nums[i];

        let rem = cummSum - k;
        count += prefixMap.get(rem) ?? 0

        prefixMap.set(cummSum, (prefixMap.get(cummSum) || 0) + 1);
    }

    return count;
};