function solution(n) {
  n += "";
  let arr = [];
  let answer = "";

  for (let i = 0; i < n.length; i++) {
    arr.push(n[i] * 1);
  }

  arr.sort((a, b) => b - a);

  arr.map((number) => (answer += number));

  return answer * 1;
}
