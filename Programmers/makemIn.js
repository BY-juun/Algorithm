function solution(A, B) {
  const length = A.length;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}
