
const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = parseInt(input[0]);
    if(n%10 !== 0){
        console.log(-1);
        return;
    }
    let btn = [300,60,10];
    let i=0;
    let answer = Array.from({length:btn.length},()=>0);
    while(n > 0){
        if(n >= btn[i]){
            n -= btn[i];
            answer[i]++;
        }
        else{
            i++;
        }
    }
    console.log(answer[0]);
    console.log(answer[1]);
    console.log(answer[2]);
});

