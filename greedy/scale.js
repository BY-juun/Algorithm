
const solve = (arr) => {
    let sum = 0;
    for(let x of arr){
        if(sum+1 >= x){
            sum += x;
        }
        else{
            break;
        }
    }
    console.log(sum+1);
};

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    input = input.slice(1);
    let arr = [];
    input[0].split(" ").map((val) => arr.push(Number(val)));
    arr.sort((a,b)=>{
        return a-b;
    });
    solve(arr);
});

