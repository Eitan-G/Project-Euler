class CollatzNumber {
    constructor(n, cache) {
        this.length = 1
        if (n !== 1) {
            const next = (n % 2 === 0) ? (n / 2) : (3 * n + 1)
            this.length = (cache[next] || new CollatzNumber(next, cache).length) + 1
        }
        cache[n] = this.length
    }
}

class CollatzSequence {
    constructor(max) {
        this.cache = {}
        this.max = { number: 1, length: 1 }
        for (let i = 1; i <= max; i++) {
            if (this.cache[i]) { continue }
            const node = new CollatzNumber(i, this.cache)
            if (node.length > this.max.length) {
                this.max = { number: i, length: node.length }
            }
        }
    }
}

console.log(new CollatzSequence(1000000).max)
