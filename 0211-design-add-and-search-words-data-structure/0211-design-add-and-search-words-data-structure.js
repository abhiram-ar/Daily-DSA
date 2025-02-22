class Node {
    constructor() {
        this.links = {}
        this.isEOW = false
    }
}

var WordDictionary = function () {
    this.root = new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
        if (!curr.links[word[i]]) {
            curr.links[word[i]] = new Node()
        }
        curr = curr.links[word[i]]
    }
    curr.isEOW = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    function dfs(j, root) {
        let curr = root
        for (let i = j; i < word.length; i++) {
            if (word[i] === ".") {
                for (let node of Object.values(curr.links)) {
                    if (dfs(i + 1, node)) {
                        return true
                    }
                }
                return false
            }
            else {
                if (!curr.links[word[i]]) {
                    return false
                }
                curr = curr.links[word[i]]
            }
        }
        return curr.isEOW
    }
    return dfs(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */