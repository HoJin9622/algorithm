function solution(n) {
  n += ''
  let answer = []

  for (let i = n.length - 1; i > -1; i--) {
    answer.push(n[i] * 1)
  }

  return answer
}
