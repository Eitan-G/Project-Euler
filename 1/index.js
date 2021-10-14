const sumToNInclusive = (n) => n * (n + 1) / 2

const sumToNByMExclusive = (n, m) => {
    n--
    return m * sumToNInclusive((n - n % m) / m)
}

const sumToNByXY = (n, x, y) => sumToNByMExclusive(n, x) + sumToNByMExclusive(n, y) - sumToNByMExclusive(n, x * y)

console.log(sumToNByXY(1000, 3, 5))