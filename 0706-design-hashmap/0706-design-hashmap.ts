class MyHashMap {
    public arr = Array(10000)
    constructor() {

    }

    put(key: number, value: number): void {
        const hash = key % this.arr.length
        const bucket = this.arr[hash]
        if (!bucket) {
            this.arr[hash] = [[key, value]]
            return
        }
        const existing = bucket.find(item => item[0] === key)

        if (existing) {
            existing[1] = value
            return
        }
        bucket.push([key, value])
    }

    get(key: number): number {
        const hash = key % this.arr.length
        const bucket = this.arr[hash]
        if (!bucket) return -1
        const existing = bucket.find(item => item[0] === key)
        if (existing) return existing[1]
        return -1

    }

    remove(key: number): void {
        const hash = key % this.arr.length
        const bucket = this.arr[hash]
        if (!bucket) return
        const existingIdx = bucket.findIndex(item => item[0] === key)

        if (existingIdx === -1) return
        
        bucket.splice(existingIdx, 1)
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */