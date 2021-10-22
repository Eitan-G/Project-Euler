class CollatzNumber {
    constructor(n, cache) {
        this.value = n
        this.length = 1
        if (n !== 1) {
            const next = (n % 2 === 0) ? (n / 2) : (3 * n + 1)
            this.next = cache[next] || new CollatzNumber(next, cache)
            this.length = this.next.length + 1
        }
        cache[n] = this
    }
}

// This should probably be improved to not require O(max) space
class CollatzSequence {
    constructor(max) {
        this.nodes = {}
        this.max = { number: 1, length: 1 }
        for (let i = 1; i <= max; i++) {
            if (this.nodes[i]) { continue }
            const node = new CollatzNumber(i, this.nodes)
            if (node.length > this.max.length) {
                this.max.number = i
                this.max.length = node.length
            }
        }
    }
}

console.log(new CollatzSequence(1000000).max)
