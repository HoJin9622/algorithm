function solution(answers) {
  let student1 = [1, 2, 3, 4, 5]
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5]
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let correct = [0, 0, 0]

  for (let i = 0; i < answers.length; i++) {
    if (student1[i % student1.length] === answers[i]) {
      correct[0] += 1
    }
    if (student2[i % student2.length] === answers[i]) {
      correct[1] += 1
    }
    if (student3[i % student3.length] === answers[i]) {
      correct[2] += 1
    }
  }

  let maxCorrect = Math.max(correct[0], correct[1], correct[2])
  let answer = []

  let result = correct.forEach((curr, idx) => {
    if (curr === maxCorrect) {
      answer.push(idx + 1)
    }
  })

  return answer
}
