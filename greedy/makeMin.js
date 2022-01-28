
const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let list = input[0].split('-');
    let list2 = [];
    for(let i=0;i<list.length;i++){
        if(list[i]?.indexOf("+")!==-1){
            let sum = 0;
            let temp = list[i].split('+');
            for(let x of temp){
                sum += parseInt(x);
            }
            list2.push(sum);
        }
        else{
            list2.push(parseInt(list[i]));
        }
    }
    let answer = list2[0];
    for(let i=1;i<list2.length;i++){
        answer -= list2[i];
    }
    console.log(answer);
});

