
const solve = (arr,n) => {
    let answer = 1;
    let from = arr[0]-0.5;
    let to = from+n;
    for(let x of arr){
        if(x > to){
            answer++;
            from = x - 0.5;
            to = from + n;
        }
    }
    console.log(answer);
};

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let arr = [];
    input[0].split(" ").map((val)=>arr.push(Number(val)));
    const n = arr[1];
    input = input.slice(1);
    arr = [];
    input[0].split(" ").map((val)=>arr.push(Number(val)));
    arr.sort((a,b)=>a-b);
    solve(arr,n);
});

