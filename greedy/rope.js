
const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = parseInt(input[0]);
    input = input.slice(1);
    let arr = [];
    for(let x of input){
        arr.push(parseInt(x));
    }
    arr.sort((a,b)=>a-b);
    let answer = arr[0] * n;
    for(let i=1;i<arr.length;i++){
        if(answer < arr[i] * (n-i)){
            answer = arr[i] * (n-i);
        }
    }
    console.log(answer);
});

