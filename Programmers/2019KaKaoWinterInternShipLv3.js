const answer = [];

function Recursive(candidate, curIdx, AccArr) {
  if (candidate.length === AccArr.length) {
    answer.push(AccArr.sort());
    return;
  }
  for (const x of candidate[curIdx]) {
    if (!AccArr.includes(x)) Recursive(candidate, curIdx + 1, [...AccArr, x]);
  }
}

function solution(user_id, banned_id) {
  const candidate = [];
  for (const ban of banned_id) {
    const temp = [];
    for (const user of user_id) {
      if (ban.length !== user.length) continue;
      let check = true;
      for (let i = 0; i < ban.length; i++) {
        if (ban[i] !== "*") {
          if (ban[i] !== user[i]) {
            check = false;
            break;
          }
        }
      }
      if (check) temp.push(user);
    }
    candidate.push(temp);
  }
  Recursive(candidate, 0, []);
  return new Set(answer.map((v) => JSON.stringify(v))).size;
}
