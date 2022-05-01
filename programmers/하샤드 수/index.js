function solution(x) {
  let a = 0
  x.toString()
    .split('')
    .forEach((num) => {
      a += +num
    })
  return x % a === 0
}
