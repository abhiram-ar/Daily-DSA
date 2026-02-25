function subarraySum(nums: number[], k: number): number {
    // Map to store (prefixSum -> frequency)
    let prefixMap = new Map<number, number>();
    
    // Base case: A sum of 0 has occurred 1 time (empty subarray)
    prefixMap.set(0, 1);
    
    let count = 0;
    let cummSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        cummSum += nums[i];
        
        let rem = cummSum - k;
        
        // If the remainder exists in the map, add its frequency to our count
        if (prefixMap.has(rem)) {
            count += prefixMap.get(rem)!;
        }
        
        // Add the current cumulative sum to the map or increment its frequency
        prefixMap.set(cummSum, (prefixMap.get(cummSum) || 0) + 1);
    }
    
    return count;
};