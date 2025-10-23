class DLLNode {
    constructor(public key: number, public val: number, public next: DLLNode | null, public prev: DLLNode | null) { }
}


class LRUCache {
    private hash: Map<number, DLLNode> = new Map<number, DLLNode>()
    private cap = 0
    private head: DLLNode | null = null
    private tail: DLLNode | null = null

    constructor(capacity: number) {
        this.cap = capacity
    }

    get(key: number): number {
        let node = this.hash.get(key)
        if (node) {
            this.remove(node)
            this.addToHead(node)
            return node.val
        }
        return -1
    }

    put(key: number, value: number): void {
        let node = this.hash.get(key)
        if (node) {
            node.val = value
            this.remove(node)
            this.addToHead(node)
            return
        }

        if (this.hash.size === this.cap && this.tail) {
            this.remove(this.tail)
        }

        const newNode = new DLLNode(key, value, null, null)
        this.addToHead(newNode)
    }

    remove(node: DLLNode): DLLNode {
        if (node.prev) node.prev.next = node.next
        if (node.next) node.next.prev = node.prev

        if (this.head === node) this.head = this.head.next
        if (this.tail === node) this.tail = this.tail.prev

        node.prev = null
        node.next = null

        if (this.head === null) this.tail = null  // ✅ handle single-node case
        if (this.tail === null) this.head = null

        this.hash.delete(node.key)

        return node
    }

    addToHead(node: DLLNode): void {
        this.hash.set(node.key, node)
        if (!this.head) {
            this.head = node
            this.tail = node
            return
        }
        node.next = this.head
        if (this.head) this.head.prev = node
        this.head = node
    }
}



/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */