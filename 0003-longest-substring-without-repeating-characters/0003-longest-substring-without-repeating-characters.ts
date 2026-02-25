function lengthOfLongestSubstring(s: string): number {
    let map = new Set()
    let longest = 0
    let l = 0
    for (let r = 0; r < s.length; r++) {
        while (l <= r && map.has(s[r])) {
            map.delete(s[l])
            l++
        }

        longest = Math.max(longest, r - l + 1)
        map.add(s[r])
    }
    return longest
};