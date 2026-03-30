function longestCommonPrefix(strs: string[]): string {
    let prefix = []
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        let common = true
        for (let j = 0; j < strs.length; j++) {
            if(strs[j][i] !== char) {
                common = false
                break
            }
        }

        if(common) prefix.push(char)
        else break
    }

    return prefix.join("")
};