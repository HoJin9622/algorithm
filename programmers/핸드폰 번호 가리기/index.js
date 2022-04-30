function solution(phone_number) {
  let answer = ''
  phone_number.split('').forEach((word, index) => {
    index < phone_number.length - 4 ? (answer += '*') : (answer += word)
  })
  return answer
}
