
const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = parseInt(input[0]);
    let sum = 0;
    let i=1;
    while(true){
        if(sum + i > n) break;
        sum+=i;
        i++;
    }
    console.log(i-1);
});

