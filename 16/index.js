const powerDigitSum = (n, power) => BigInt(n ** power)
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, n) => sum + n, 0)

console.log(powerDigitSum(2, 1000))