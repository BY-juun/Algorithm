const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let str = input[0];
    const first = str[0];
    let cur = str[0];
    let answer = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] !== cur){
            if(str[i] !== first)
                answer++;
            cur = str[i];
        }
    }   
    console.log(answer);
})
