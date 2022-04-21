function solution(record) {
  var answer = [];
  let uidNickname = {};
  for (let i = 0; i < record.length; i++) {
    const [curCommand, curUid, curNickname] = record[i].split(" ");
    if (curCommand === "Change") {
      uidNickname[curUid] = curNickname;
    } else if (curCommand === "Enter") {
      uidNickname[curUid] = curNickname;
    }
  }

  for (let x of record) {
    const [command, uid] = x.split(" ");
    if (command === "Change") continue;
    else if (command === "Enter") answer.push(`${uidNickname[uid]}님이 들어왔습니다.`);
    else if (command === "Leave") answer.push(`${uidNickname[uid]}님이 나갔습니다.`);
  }

  return answer;
}
