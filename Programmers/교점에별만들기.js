function isHorizon(a1, c1, a2, c2) {
  if (a1 === a2) return true;
  return false;
}

function isInteger(num) {
  if (Math.floor(num) !== num) return false;
  return true;
}

const NO_INTERSECTION_POINT = -1;

function getIntersectionPoint(a1, b1, c1, a2, b2, c2) {
  if (a1 * b2 === b1 * a2) return NO_INTERSECTION_POINT;
  const deno = a1 * b2 - b1 * a2;
  const numerator_X = b1 * c2 - c1 * b2;
  const numberator_Y = c1 * a2 - a1 * c2;
  if (!isInteger(numerator_X / deno)) return NO_INTERSECTION_POINT;
  if (!isInteger(numberator_Y / deno)) return NO_INTERSECTION_POINT;
  return [numerator_X / deno, numberator_Y / deno];
}

function solution(line) {
  const points = [];
  var answer = [];
  for (let i = 0; i < line.length; i++) {
    const lineHeight = line[i][1];
    for (let j = i + 1; j < line.length; j++) {
      const [a1, b1, c1] = line[i].map((v) => {
        if (line[j][1] !== 0) return parseInt(v * line[j][1]);
        else return v;
      });
      const [a2, b2, c2] = line[j].map((v) => {
        if (lineHeight !== 0) return parseInt(v * lineHeight);
        else return v;
      });

      if (isHorizon(a1, c1, a2, c2)) continue;
      const intersectionPoint = getIntersectionPoint(a1, b1, c1, a2, b2, c2);
      if (intersectionPoint === NO_INTERSECTION_POINT) continue;
      points.push(intersectionPoint);
    }
  }
  const array_X = points.map((v) => v[0]);
  const array_Y = points.map((v) => v[1]);

  const min_X = Math.min(...array_X);
  const max_X = Math.max(...array_X);
  const min_Y = Math.min(...array_Y);
  const max_Y = Math.max(...array_Y);

  for (let y = min_Y; y <= max_Y; y++) {
    const row = [];
    for (let x = min_X; x <= max_X; x++) {
      if (points.find((v) => v[0] === x && v[1] === y)) row.push("*");
      else row.push(".");
    }
    answer.push(row.join(""));
  }
  return answer.reverse();
}
