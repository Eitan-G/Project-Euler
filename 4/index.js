const isPalindrome = (n) => String(n) === Array.from(String(n)).reverse().join('')

const largestPalindromicProduct = (digits) => {
  const maxDivisor = (10 ** digits) - 1
  const minDivisor = 10 ** (digits - 1)

  let maxPalindrome = 0

  for (let divisorA = maxDivisor; divisorA >= minDivisor; divisorA--) {
    for (let divisorB = divisorA; divisorB >= minDivisor; divisorB--) {
      const product = divisorA * divisorB
      if (product <= maxPalindrome) { break }
      if (!isPalindrome(product)) { continue }
      maxPalindrome = product
    }
  }
  return maxPalindrome
}

console.log(largestPalindromicProduct(3))