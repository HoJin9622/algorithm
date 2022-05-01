function solution(arr) {
  const sum = arr.reduce((prev, current) => prev + current, 0)
  return sum / arr.length
}
