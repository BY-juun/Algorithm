let candidate = [];
let isVisited;
let isVisitedBack;
let pathArr;
let gateArr;
let peakArr;
let startPoint;
let answer = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

function goBackStart(pos, intensity, peakNum) {
  if (pos === startPoint) {
    if (intensity < answer[1]) answer = [peakNum, intensity];
    else if (intensity === answer[1]) {
      if (answer[0] > peakNum) answer = [peakNum, intensity];
    }
    return;
  }
  for (let path of pathArr) {
    let [i, j, w] = path;
    w = Number(w);
    if (i === pos) {
      if (!isVisitedBack[j] && !gateArr.includes(j) && !peakArr.includes(j)) {
        //console.log(i,j,w);
        isVisitedBack[j] = true;
        goBackStart(j, intensity < w ? w : intensity, peakNum);
        isVisitedBack[j] = false;
      }
    } else if (j === pos) {
      if (!isVisitedBack[i] && !gateArr.includes(i) && !peakArr.includes(i)) {
        //console.log(i,j,w);
        isVisitedBack[i] = true;
        goBackStart(i, intensity < w ? w : intensity, peakNum);
        isVisitedBack[i] = false;
      }
    }
  }
}

function gotoPeak(pos, intensity) {
  if (peakArr.includes(pos)) {
    isVisitedBack[pos] = true;
    goBackStart(pos, intensity, pos);
    return;
  }
  for (let path of pathArr) {
    let [i, j, w] = path;
    w = Number(w);
    if (i === pos) {
      if (!isVisited[j] && !gateArr.includes(j)) {
        isVisited[j] = true;
        gotoPeak(j, intensity < w ? w : intensity);
        isVisited[j] = false;
      }
    } else if (j === pos) {
      if (!isVisited[i] && !gateArr.includes(i)) {
        isVisited[i] = true;
        gotoPeak(i, intensity < w ? w : intensity);
        isVisited[i] = false;
      }
    }
  }
}

function solution(n, paths, gates, summits) {
  pathArr = paths;
  gateArr = [...gates];
  peakArr = summits;
  for (let gate of gates) {
    isVisited = Array.from({ length: n + 1 }, () => false);
    isVisitedBack = Array.from({ length: n + 1 }, () => false);
    isVisited[gate] = true;
    startPoint = Number(gate);
    gateArr.shift();
    gotoPeak(Number(gate), Number.MIN_SAFE_INTEGER);
    gateArr.push(gate);
  }
  return answer;
}
