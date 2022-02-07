const solve = (arr) => {
    arr[0] = arr[0].replace(/5/gi,'6');
    arr[1] = arr[1].replace(/5/gi,'6');
    let max = Number(arr[0]) + Number(arr[1]);
    arr[0] = arr[0].replace(/6/gi,'5');
    arr[1] = arr[1].replace(/6/gi,'5');
    let min = Number(arr[0]) + Number(arr[1]);
    console.log(min, max);
    
}

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let arr = [];
    input[0].split(" ").map((value)=>arr.push((value)));
    solve(arr);
})
