const solve = (arr) => {
    for(let j=0;j<arr.length;j++){
        let answer = 0;
        let tick = 0;
        for(let i=1;i<=arr[j][2];i++){
            if(tick === arr[j][0]){
                if(i%arr[j][1] === 0) tick = 0;
            }
            else{
                tick++;
                answer++;
            }
        }
        console.log(`Case ${j+1}: ${answer}`);
    }
}

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let arr = [];
    for(let x of input){
        arr.push(x.split(' ').map((value) => Number(value)));
    }
    arr = arr.slice(0,-1);
    solve(arr);
})
