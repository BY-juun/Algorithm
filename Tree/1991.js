let tree;
let answer1 = "";
let answer2 = "";
let answer3 = "";

const preorderTraversal = (node) => {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  answer1 += node;
  preorderTraversal(lt);
  preorderTraversal(rt);
};

const inorderTraversal = (node) => {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  inorderTraversal(lt);
  answer2 += node;
  inorderTraversal(rt);
};

const postorderTraversal = (node) => {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  postorderTraversal(lt);
  postorderTraversal(rt);
  answer3 += node;
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  tree = {};
  for (let i = 1; i < input.length; i++) {
    let [a, b, c] = input[i].split(" ").map((value) => value);
    tree[a] = [b, c];
  }
  preorderTraversal("A");
  inorderTraversal("A");
  postorderTraversal("A");
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
});
