function lengthOfLongestSubstring(s: string): number {
    let longest = 0
    let l = 0
    let hash = new Map()
    for (let r = 0; r < s.length; r++) {
        if (hash.get(s[r]) >= l) l = hash.get(s[r]) + 1
 
        hash.set(s[r], r)

        longest = Math.max(longest, r - l + 1)

    }
    return longest
};