
const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = input[0];
    if(!n.split('').includes('0')){
        console.log(-1);
        return;
    }
    const numberSplitArray = n.split('').map(i=>Number(i));
    const sumOfEachPosition = numberSplitArray.reduce((acc,cur)=>acc+cur);
    if(sumOfEachPosition % 3 !== 0) console.log(-1);
    else console.log(numberSplitArray.sort((a,b)=>b-a).join(''));
});

