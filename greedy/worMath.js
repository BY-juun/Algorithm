//1339번 다시 풀어보기

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = Number(input[0]);
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(input[i+1]);
    }
    const count = {};
    arr.forEach(word => {
        [...word].forEach((alphabet, i) => {
        if (!count[alphabet]) count[alphabet] = 0;
        count[alphabet] += 10 ** (word.length - i - 1);
        });
    });
    console.log(Object.values(count).sort((a,b) => b-a).reduce((acc,cur,idx) => acc + (cur*(9-idx)),0));
})
