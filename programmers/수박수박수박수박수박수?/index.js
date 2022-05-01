function solution(n) {
  let answer = ''
  let check = true
  while (n > 0) {
    check ? (answer = answer.concat('수')) : (answer = answer.concat('박'))
    check = !check
    n--
  }
  return answer
}
