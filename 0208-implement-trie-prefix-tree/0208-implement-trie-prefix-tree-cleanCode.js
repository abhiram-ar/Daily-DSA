class Node {
    constructor() {
        this.links = new Array(26).fill(null)
        this.isEOW = false
    }

    containsKey(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] !== null
    }
    setLink(ch, newNode) {
        this.links[ch.charCodeAt(0) - "a".charCodeAt(0)] = newNode
    }
    nextNode(ch) {
        return this.links[ch.charCodeAt(0) - "a".charCodeAt(0)]
    }
    setEnd(bool = true) {
        this.isEOW = bool
    }
    isEnd() {
        return this.isEOW
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
        if (!curr.containsKey(word[i])) {
            curr.setLink(word[i], new Node())
        }
        curr = curr.nextNode(word[i])
    }
    curr.setEnd()
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
        if (!curr.containsKey(word[i])) {
            return false
        }
        curr = curr.nextNode(word[i])
    }
    return curr.isEnd()
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this.root
    for (let i = 0; i < prefix.length; i++) {
        if (!curr.containsKey(prefix[i])) {
            return false
        }
        curr = curr.nextNode(prefix[i])
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