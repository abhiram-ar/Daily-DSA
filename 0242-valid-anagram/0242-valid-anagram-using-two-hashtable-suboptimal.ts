function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const shash = new Array(26).fill(0)
    const thash = new Array(26).fill(0)
    const aCharCode = "a".charCodeAt(0)

    for (let i = 0; i < s.length; i++) {
        shash[s.charCodeAt(i) - aCharCode]++
        thash[t.charCodeAt(i) - aCharCode]++
    }

    for (let i = 0; i < shash.length; i++) {
        if (shash[i] !== thash[i]) {
            return false
        }
    }
    return true
};