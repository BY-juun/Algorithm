const solve = (n,brand) => {
    let answer = Number.MAX_SAFE_INTEGER;
    for(let x of brand){
        let temp = findMin(n,x[0],x[1]);
        //console.log(temp);
        if(temp < answer) answer = temp;
    }
    console.log(answer);
};

const findMin = (n,pack,one) => {
    if(n < 6){
        if(pack < one*n) return pack;
        else return one*n;
    }
    if(pack < one*6){ //팩으로 사는게 더  쌀 때,
        const num = Math.floor(n/6);
        const remain = n%6;
        if(pack < one*(n%6)){
            return pack * (num+1);
        }
        else{
            return pack * num + one * remain;
        }
    }
    else{ //낱개로 사는게 더 쌀 때,
        return one * n;
    }

}


const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let firstLine = [];
    input[0].split(" ").map((value)=>firstLine.push(Number(value)));
    const n = firstLine[0], m = firstLine[1];
    let brand = [];
    input = input.slice(1);
    for(let i=0;i<m;i++){
        let temp = [];
        input[i].split(" ").map((value)=>temp.push(Number(value)));
        brand.push(temp);
    }
    solve(n,brand);
})

