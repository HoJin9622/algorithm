function solution(array, commands) {
  let answer = []
  let arr = []

  for (let i = 0; i < commands.length; i++) {
    arr = array.slice(commands[i][0] - 1, commands[i][1])
    arr.sort(function (a, b) {
      return a - b
    })
    answer.push(arr[commands[i][2] - 1])
    arr = []
  }
  return answer
}
