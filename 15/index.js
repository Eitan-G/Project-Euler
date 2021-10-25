class Vertex {
    constructor(x, y) {
        this.coords = { x, y }
        this.right
        this.down
        this._pathsToEnd
    }

    get pathsToEnd() {
        if (this._pathsToEnd !== undefined) { return this._pathsToEnd }
        if (!this.right && !this.down) { return this._pathsToEnd = 1 }
        const rightPaths = this.right?.pathsToEnd || 0
        const downPaths = this.down?.pathsToEnd || 0
        return this._pathsToEnd = rightPaths + downPaths
    }
}

class GridGraph {
    constructor(width, height) {
        this.verticesCount = (width + 1) * (height + 1)
        this.grid = Array.from(Array(height + 1), () => Array(width + 1))
        for (let y = height; y >= 0; y--) {
            for (let x = width; x >= 0; x--) {
                const v = new Vertex(x, y)
                this.addVertex(v)
                if (x < width) {
                    v.right = (this.grid[y][x + 1])
                }
                if (y < height) {
                    v.down = (this.grid[y + 1][x])
                }
            }
        }
    }

    addVertex(v) {
        const { x, y } = v.coords
        this.grid[y][x] = v
    }
}

const problem = (width, height) => {
    const graph = new GridGraph(width, height)
    return graph.grid[0][0].pathsToEnd
}

console.log(problem(20, 20))
