function minWindow(s: string, t: string): string {
    if (t === "") return ""
    const window: Map<string, number> = new Map()
    const tCount: Map<string, number> = new Map()
    for (let i = 0; i < t.length; i++) {
        tCount.set(t[i], (tCount.get(t[i]) ?? 0) + 1)
    }
    let res = [-1, -1]
    let resLength = Infinity
    let have = 0
    let need = tCount.size
    let l = 0
    for (let r = 0; r < s.length; r++) {
        let c = s[r]
        window.set(c, (window.get(c) ?? 0) + 1)
        if (tCount.has(c) && tCount.get(c) === window.get(c)) {
            have++
        }
        while (have === need) {
            if ((r - l + 1) < resLength) {
                resLength = r - l + 1
                res = [l, r]
            }
            window.set(s[l], window.get(s[l]) - 1)
            if (tCount.has(s[l]) && window.get(s[l]) < tCount.get(s[l])) {
                have--
            }
            l++
        }
    }
    return resLength !== Infinity ? s.slice(res[0], res[1] + 1) : ""
};