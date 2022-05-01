function solution(participant, completion) {
  var answer = ''
  const size = participant.length

  participant.sort()
  completion.sort()

  for (let i = 0; i < size; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i]
      break
    }
  }

  return answer
}
