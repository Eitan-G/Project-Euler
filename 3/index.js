const sortDescending = nums => nums.sort((a, b) => a < b ? 1 : -1)

const generateFactors = (n) => {
    const factors = []
    const root = Math.floor(Math.sqrt(n))
    for (let i = root; i >= 1; i--) {
        if (n % i === 0) {
            factors.push(i)
            if (i ** 2 !== n) {
                factors.push(n / i)
            }
        }
    }
    return sortDescending(factors)
}

const isPrime = (n) => {
    const root = Math.sqrt(n)
    for (let i = 2; i <= root; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

const largestPrimeFactor = (n) => {
    const factors = sortDescending(generateFactors(n))
    return factors.find(isPrime)
}

const testCases = [
    { fn: generateFactors, input: 28, expected: [28, 14, 7, 4, 2, 1] },
    { fn: generateFactors, input: 14, expected: [14, 7, 2, 1] },
    { fn: generateFactors, input: 18, expected: [18, 9, 6, 3, 2, 1] },
    { fn: generateFactors, input: 25, expected: [25, 5, 1] },
    { fn: generateFactors, input: 23729, expected: [23729, 389, 61, 1] },
    { fn: generateFactors, input: 98273, expected: [98273, 14039, 973, 707, 139, 101, 7, 1] },
    { fn: largestPrimeFactor, input: 28, expected: 7 },
    { fn: largestPrimeFactor, input: 14, expected: 7 },
    { fn: largestPrimeFactor, input: 18, expected: 3 },
    { fn: largestPrimeFactor, input: 25, expected: 5 },
    { fn: largestPrimeFactor, input: 23729, expected: 389 },
    { fn: largestPrimeFactor, input: 98273, expected: 139 },
]

testCases.forEach(({ fn, input, expected }) => {
    // return // Remove to run tests
    const output = fn(input)
    const status = output.toString() === expected.toString() ? "SUCCESS" : "FAILURE"
    console.log(`${status}: received [${output}] and expected [${expected}]`)
})

console.log(largestPrimeFactor(600851475143))