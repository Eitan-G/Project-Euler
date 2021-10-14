const fibonacci = (n) => {
    if (n < 1) { throw "n mus be greater than 0"}
    let current = 1
    let previous = current
    while (n > 0) {
        const next = current + previous
        previous = current
        current = next
        n--
    }
    return current
}

const fibonacciUpToN = (n) => {
    if (n < 1) { throw "n mus be greater than 0"}
    const nums = []
    let previous = 1
    let current = 1
    let sum = 0
    while (current <= n) {
        const next = previous + current
        previous = current
        current = next
        if (previous % 2 === 0) {
            sum+= previous
        }
    }
    return sum
}

console.log(fibonacciUpToN(4000000))