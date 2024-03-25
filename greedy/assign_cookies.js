/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let answer = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let gIdx = 0;
  let sIdx = 0;

  while (true) {
    if (gIdx === g.length || sIdx === s.length) {
      break;
    }
    if (g[gIdx] <= s[sIdx]) {
      gIdx++;
      sIdx++;
      answer++;
    } else {
      sIdx++;
    }
  }

  return answer;
};
