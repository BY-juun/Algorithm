function MinHeap() { 
    this.heap = [0]; 
    this.insert = (v) => { 
        this.heap.push(v); 
        let p = this.heap.length - 1; 
        while (p > 1 && this.heap[Math.floor(p / 2)] > this.heap[p]) { 
            let tmp = this.heap[Math.floor(p / 2)]; 
            this.heap[Math.floor(p / 2)] = this.heap[p]; 
            this.heap[p] = tmp; p = Math.floor(p / 2); 
        }  
    }; 
    this.getLength = () => { 
        return this.heap.length; 
    }; 
    this.delete = () => { 
        if (this.heap.length - 1 < 1) { 
            return 0; 
        } 
        let deletedItem = this.heap[1]; 
        this.heap[1] = this.heap[this.heap.length - 1]; 
        this.heap.pop(); 
        let p = 1; 
        while (p * 2 < this.heap.length) { 
            let min = this.heap[p * 2]; 
            let minP = p * 2; 
            if (p * 2 + 1 < this.heap.length && min > this.heap[p * 2 + 1]) { 
                min = this.heap[p * 2 + 1]; minP = p * 2 + 1; 
            } 
            if (this.heap[p] < min) {
                 break; 
            } 
            let tmp = this.heap[p]; 
            this.heap[p] = this.heap[minP]; 
            this.heap[minP] = tmp;
            p = minP;
        } 
        return deletedItem; 
    }; 
}



const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = []; 
rl.on("line", function (line) { 
    input.push(line); 
}).on("close", function () { 
    let N = parseInt(input[0]);
    let arr = new MinHeap();
    for(let i=0;i<N;i++){
        arr.insert(parseInt(input[i+1]));
    }
    let answer = [];
    for(let i=0;i<N;i++){
        const a = arr.delete();
        const b = arr.delete();
        arr.insert(a+b);
        answer.push(a+b);
    }
    answer.pop()
    console.log(answer.reduce((acc,cur) => acc + cur , 0));
})
