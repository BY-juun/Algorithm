const solve = (arr) => {
    let answer = 0;
    let positive = [];
    let negative = [];
    for(let x of arr){
        if(x === 1) answer += x;
        else if(x>0) positive.push(x);
        else if(x<=0) negative.push(x);
    }
    positive.sort((a,b)=> {
        return b-a;
    });
    negative.sort((a,b)=>{
        return a-b;
    });

    for(let i=0;i<positive.length;i+=2){
        if(i+1 < positive.length){
            answer += positive[i] * positive[i+1];
        }
        else{
            answer += positive[i];
        }
    }
    for(let i=0;i<negative.length;i+=2){
        if(i+1 < negative.length){
            answer += negative[i] * negative[i+1];
        }
        else{
            answer += negative[i];
        }
    }

    console.log(answer);
}

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let n = parseInt(input[0]);
    input = input.slice(1);
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(Number(input[i]));
    }
    solve(arr);
})
