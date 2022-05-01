function solution(board, moves) {
  var answer = 0
  let arr = []

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        arr.push(board[j][moves[i] - 1])
        board[j][moves[i] - 1] = 0
        break
      }
    }
  }

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === arr[x + 1]) {
      answer += 2
      arr.splice(x, 2)
      x = -1
    }
  }

  return answer
}
