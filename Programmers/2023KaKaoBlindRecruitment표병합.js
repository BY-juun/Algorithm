const graph = Array.from({ length: 51 }, () =>
  Array.from({ length: 51 }, () => {
    return { isMerged: false, value: null, mergedPos: null };
  })
);
const answer = [];
const mergedCells = [];

const commandFn = {
  UPDATE: do_Update,
  MERGE: do_Merge,
  UNMERGE: do_UnMerge,
  PRINT: do_Print,
};

function isSameCell(r1, c1, r2, c2) {
  if (r1 === r2 && c1 === c2) return true;
  const targetCell1 = graph[r1][c1];
  const targetCell2 = graph[r2][c2];

  if (targetCell1.isMerged && targetCell2.isMerged) return targetCell1.mergedPos === targetCell2.mergedPos;

  return false;
}

function solution(commands) {
  commands.forEach((command) => {
    const cmd = command.split(" ")[0];
    commandFn[cmd](command);
  });
  return answer;
}

function do_Update(command) {
  const { r, c, value, value1, value2 } = splitUpdateCommand(command);
  if (r && c && value) updateCell(r, c, value);
  else updateValue(value1, value2);
}

function updateCell(r, c, value) {
  const targetCell = graph[r][c];
  if (targetCell.isMerged) mergedCells[targetCell.mergedPos].value = value;
  else targetCell.value = value;
}

function updateValue(value1, value2) {
  for (let i = 1; i < 51; i++) {
    for (let j = 1; j < 51; j++) {
      const targetCell = graph[i][j].isMerged ? mergedCells[graph[i][j].mergedPos] : graph[i][j];

      if (targetCell.value === value1) targetCell.value = value2;
    }
  }
}

function splitUpdateCommand(command) {
  const splited = command.split(" ");
  if (splited.length === 3) return { value1: splited[1], value2: splited[2] };
  else return { r: splited[1], c: splited[2], value: splited[3] };
}

function do_Merge(command) {
  const [_, r1, c1, r2, c2] = command.split(" ");
  if (isSameCell(r1, c1, r2, c2)) return;
  const targetCell1 = graph[r1][c1];
  const targetCell2 = graph[r2][c2];

  if (!targetCell1.isMerged && !targetCell2.isMerged) {
    //두 개의 Cell이 모두 merge되지 않은 셀일 경우
    targetCell1.isMerged = true;
    targetCell2.isMerged = true;
    const mergedValue = getMergedValue(targetCell1.value, targetCell2.value);

    mergedCells.push({
      cells: [
        { r: r1, c: c1 },
        { r: r2, c: c2 },
      ],
      value: mergedValue,
    });

    const mergedPos = mergedCells.length - 1;
    targetCell1.value = null;
    targetCell2.value = null;
    targetCell1.mergedPos = mergedPos;
    targetCell2.mergedPos = mergedPos;
  } else if (targetCell1.isMerged && targetCell2.isMerged) {
    //두 개의 Cell이 모두 merge된 경우
    const mergedCell1 = mergedCells[targetCell1.mergedPos];
    const mergedCell2 = mergedCells[targetCell2.mergedPos];

    const mergedValue = getMergedValue(mergedCell1.value, mergedCell2.value);

    mergedCells.push({
      cells: [...mergedCell1.cells, ...mergedCell2.cells],
      value: mergedValue,
    });
    mergedCell1.value = null;
    mergedCell2.value = null;

    updateMergedPos(mergedCell1.cells, mergedCells.length - 1);
    updateMergedPos(mergedCell2.cells, mergedCells.length - 1);
  } else {
    if (targetCell1.isMerged && !targetCell2.isMerged) {
      const mergedCell = mergedCells[targetCell1.mergedPos];

      //값을 가진 쪽
      const mergedValue = getMergedValue(mergedCell.value, targetCell2.value);
      targetCell2.isMerged = true;
      targetCell2.mergedPos = targetCell1.mergedPos;
      targetCell2.value = null;

      mergedCell.cells = [...mergedCell.cells, { r: r2, c: c2 }];
      mergedCell.value = mergedValue;
    } else {
      const mergedCell = mergedCells[targetCell2.mergedPos];

      //값을 가진 쪽
      const mergedValue = getMergedValue(targetCell1.value, mergedCell.value);
      targetCell1.isMerged = true;
      targetCell1.mergedPos = targetCell2.mergedPos;

      mergedCell.cells = [...mergedCell.cells, { r: r1, c: c1 }];
      mergedCell.value = mergedValue;
    }
  }
}

function getMergedValue(value1, value2) {
  let mergedValue = null;
  if (value1 && value2) mergedValue = value1;
  else if (!value1 && value2) mergedValue = value2;
  else if (value1 && !value2) mergedValue = value1;
  return mergedValue;
}

function updateMergedPos(cells, newMergedPos) {
  cells.forEach((cell) => {
    const { r, c } = cell;
    graph[r][c].mergedPos = newMergedPos;
    graph[r][c].value = null;
  });
}

function do_UnMerge(command) {
  const [_, targetR, targetC] = command.split(" ");
  if (!graph[targetR][targetC].isMerged) return;

  const mergedCell = mergedCells[graph[targetR][targetC].mergedPos];
  mergedCell.cells.forEach((cell) => {
    const { r, c } = cell;
    graph[r][c].isMerged = false;
    graph[r][c].value = null;
    graph[r][c].mergedPos = null;
    if (isSameCell(r, c, targetR, targetC)) graph[r][c].value = mergedCell.value;
  });
}

function do_Print(command) {
  const [_, r, c] = command.split(" ");

  if (graph[r][c].isMerged) answer.push(mergedCells[graph[r][c].mergedPos].value || "EMPTY");
  else answer.push(graph[r][c].value || "EMPTY");
}
