function solution(strings, n) {
  strings.sort((a, b) => {
    if (a.charCodeAt(n) !== b.charCodeAt(n))
      return a.charCodeAt(n) - b.charCodeAt(n)
    else return a < b ? -1 : 1
  })

  return strings
}
