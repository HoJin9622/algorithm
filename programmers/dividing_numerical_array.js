function solution(arr, divisor) {
  arr = arr.filter((element) => element % divisor === 0);

  if (arr.length === 0) return [-1];

  arr.sort((a, b) => a - b);

  return arr;
}
