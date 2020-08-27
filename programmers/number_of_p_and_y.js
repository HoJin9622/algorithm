function solution(s) {
  let pCount = 0;
  let yCount = 0;
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") pCount += 1;
    if (s[i] === "y") yCount += 1;
  }
  if (pCount === yCount) return true;
  if (pCount !== yCount) return false;
}
