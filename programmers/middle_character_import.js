function solution(s) {
  var answer = "";

  if (s.length % 2 === 1) {
    answer = s[(s.length - 1) / 2];
  }

  if (s.length % 2 === 0) {
    answer = s[(s.length - 1) / 2 - 0.5] + s[(s.length - 1) / 2 + 0.5];
  }

  return answer;
}
