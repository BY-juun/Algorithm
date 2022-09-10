function convert(s) {
  const deleteZero = s.split("").filter((v) => v === "0").length;
  const result = s
    .split("")
    .filter((v) => v !== "0")
    .length.toString(2);
  return [deleteZero, result];
}

function solution(s) {
  var answer = [0, 0];
  while (s !== "1") {
    const [deleteZero, result] = convert(s);
    s = result;
    answer[0] += 1;
    answer[1] += deleteZero;
  }
  return answer;
}
