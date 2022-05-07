function solution(rc, operations) {
  var answer = [[]];
  for (let operation of operations) {
    switch (operation) {
      case "ShiftRow":
        rc.unshift(rc.pop());
        break;
      case "Rotate":
        let stack = [];
        for (let i = 0; i < rc[0].length - 1; i++) stack.push(rc[0][i]);
        for (let i = 0; i < rc.length - 1; i++) stack.push(rc[i][rc[0].length - 1]);
        for (let i = rc[0].length - 1; i > 0; i--) stack.push(rc[rc.length - 1][i]);
        for (let i = rc.length - 1; i > 0; i--) stack.push(rc[i][0]);
        stack.unshift(stack.pop());
        for (let i = 0; i < rc[0].length - 1; i++) rc[0][i] = stack.shift();
        for (let i = 0; i < rc.length - 1; i++) rc[i][rc[0].length - 1] = stack.shift();
        for (let i = rc[0].length - 1; i > 0; i--) rc[rc.length - 1][i] = stack.shift();
        for (let i = rc.length - 1; i > 0; i--) rc[i][0] = stack.shift();
    }
  }

  return rc;
}
