function lengthOfLongestSubstring(s: string): number {
    let map = new Map()
    let longest = 0
    let l = 0
    for (let r = 0; r < s.length; r++) {
        if (map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1
        }

        longest = Math.max(longest, r - l + 1)
        map.set(s[r], r)
    }
    return longest
};