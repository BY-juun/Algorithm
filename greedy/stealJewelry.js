class PriorityQueue { 
    constructor() { 
        this.store = []; 
    } 
    enqueue(name, score) { 
        this.store.push([name, score]); 
    } 
    
    dequeue() { 
        let entry = 0; 
        this.store.forEach((item, index) => { 
            if (this.store[entry][1] < this.store[index][1]) { 
                entry = index; 
            } 
        }); 
        return this.store.splice(entry, 1); 
    } 
}

const solution = (k, priorityQueue, bag) => { 
    let cnt = 0; 
    for (let i = 0; i < k; i++) { 
        let value = priorityQueue.dequeue(); 
        bag = bag.map((el, index) => { 
            if (el >= value[0][0]) { 
                return; 
            } 
            else { 
                return el; 
            } 
        }); 
        cnt += value[0][1]; 
    } 
    console.log(cnt); 
}; 

const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, }); 
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let [n, k] = input.shift().split(" ").map((el) => Number(el)); 
    const priorityQueue = new PriorityQueue(); 
    for (let i = 0; i < n; i++) { 
        let [x, y] = input[i].split(" ").map((el) => Number(el)); 
        priorityQueue.enqueue(x, y); 
    } 
    let bag = []; 
    for (let j = 0; j < k; j++) { 
        bag.push(Number(input[j])); 
    } 
    bag = bag.sort((a, b) => a - b); 
    solution(k, priorityQueue, bag); 
    process.exit(); 
});
