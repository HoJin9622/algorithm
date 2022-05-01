function solution(num) {
  let result = num
  count = 0
  while (result !== 1) {
    if (result % 2 === 0) {
      result = result / 2
    } else {
      result = result * 3 + 1
    }
    count++
    if (count > 500) {
      break
    }
  }
  return count > 500 ? -1 : count
}
