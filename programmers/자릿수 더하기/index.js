function solution(n) {
  let answer = 0
  n += ''
  for (let i = 0; i < n.length; i++) {
    answer += n[i] * 1
  }

  return answer
}
