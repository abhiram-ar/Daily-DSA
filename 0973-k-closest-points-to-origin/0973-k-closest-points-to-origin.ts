function kClosest(points: number[][], k: number): number[][] {
    let sMaxHeap = []

    for (let i = 0; i < points.length; i++) {
        if (sMaxHeap.length === k && sMaxHeap[0] && distance(sMaxHeap[0]) > distance(points[i])) {
            popMaxHeap()
        }
        if (sMaxHeap.length < k) {
            addToMaxHeap(points[i])
        }
    }

    return sMaxHeap

    function distance(point: number[]): number {
        return Math.sqrt((point[0] * point[0]) + (point[1] * point[1]))
    }

    function parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    function addToMaxHeap(point: number[]) {
        sMaxHeap.push(point)
        let distanceOfNewPoint = distance(point)

        let i = sMaxHeap.length - 1
        while (i > 0 && distanceOfNewPoint > distance(sMaxHeap[parent(i)])) {
            [sMaxHeap[i], sMaxHeap[parent(i)]] = [sMaxHeap[parent(i)], sMaxHeap[i]];
            i = parent(i)
        }
    }

    function heapify(idx: number) {
        while (true) {
            let max = idx
            let left = 2 * idx + 1
            let right = 2 * idx + 2

            if (left < sMaxHeap.length && distance(sMaxHeap[left]) > distance(sMaxHeap[max])) max = left
            if (right < sMaxHeap.length && distance(sMaxHeap[right]) > distance(sMaxHeap[max])) max = right

            if (max === idx) break;
            [sMaxHeap[idx], sMaxHeap[max]] = [sMaxHeap[max], sMaxHeap[idx]];
            idx = max

        }
    }

    function popMaxHeap(): [number, number] | null {
        if (sMaxHeap.length === 0) return null

        if (sMaxHeap.length === 1) {
            return sMaxHeap.pop()
        }

        const deleted = sMaxHeap[0]
        const lastNode = sMaxHeap.pop()
        sMaxHeap[0] = lastNode

        heapify(0)
    }


};