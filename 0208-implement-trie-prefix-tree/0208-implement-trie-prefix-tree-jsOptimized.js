class Node {
    constructor() {
        this.links = new Map()
        this.isEOW = false
    }
}


var Trie = function () {
    this.root = new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
        if (!curr.links.get(word[i])) {
            curr.links.set(word[i], new Node())
        }
        curr = curr.links.get(word[i])
    }
    curr.isEOW = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
        if (!curr.links.get(word[i])) {
            return false
        }
        curr = curr.links.get(word[i])
    }
    return curr.isEOW
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this.root
    for (let i = 0; i < prefix.length; i++) {
        if (!curr.links.get(prefix[i])) {
            return false
        }
        curr = curr.links.get(prefix[i])
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */