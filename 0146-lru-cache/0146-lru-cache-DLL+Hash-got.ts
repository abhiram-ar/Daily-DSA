class DLLNode {
  key: number
  val: number
  prev: DLLNode | null = null
  next: DLLNode | null = null

  constructor(key: number, val: number) {
    this.key = key
    this.val = val
  }
}

class LRUCache {
  private capacity: number
  private size: number = 0
  private map: Map<number, DLLNode> = new Map()
  private head: DLLNode | null = null // most recently used
  private tail: DLLNode | null = null // least recently used

  constructor(capacity: number) {
    if (capacity <= 0) throw new Error("Capacity must be > 0")
    this.capacity = capacity
  }

  /** Return value if exists, else -1. Move node to head (most-recent). */
  get(key: number): number {
    const node = this.map.get(key)
    if (!node) return -1

    this.moveToHead(node)
    return node.val
  }

  /** Insert or update. On insert, evict LRU if needed. */
  put(key: number, value: number): void {
    const node = this.map.get(key)
    if (node) {
      // update value and move to head
      node.val = value
      this.moveToHead(node)
      return
    }

    // new node
    const newNode = new DLLNode(key, value)
    this.map.set(key, newNode)
    this.addToHead(newNode)
    this.size++

    if (this.size > this.capacity) {
      const tail = this.removeTail() // evict least-recently-used
      if (tail) {
        this.map.delete(tail.key)
        this.size--
      }
    }
  }

  private addToHead(node: DLLNode) {
    node.prev = null
    node.next = this.head
    if (this.head) this.head.prev = node
    this.head = node
    if (!this.tail) this.tail = node // first node
  }

  private removeNode(node: DLLNode) {
    if (node.prev) node.prev.next = node.next
    else this.head = node.next

    if (node.next) node.next.prev = node.prev
    else this.tail = node.prev

    node.prev = null
    node.next = null
  }

  private moveToHead(node: DLLNode) {
    if (this.head === node) return
    this.removeNode(node)
    this.addToHead(node)
  }

  private removeTail(): DLLNode | null {
    if (!this.tail) return null
    const oldTail = this.tail
    this.removeNode(oldTail)
    return oldTail
  }
}
