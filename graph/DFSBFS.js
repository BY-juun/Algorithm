function DFS(v) { 
    visited[v] = true; 
    DFS_graph.push(v); 
    for (let i = 1; i < graph.length; i++) { 
        if (graph[v][i] === 1 && visited[i] === false) {
             DFS(i); 
        } 
    } 
}
function BFS(v) { 
    let Queue = []; 
    Queue.push(v); 
    BFS_graph.push(v); 
    while (Queue.length !== 0) { 
        let dequeue = Queue.shift(); 
        visited2[dequeue] = true; 
        for (let i = 1; i < graph.length; i++) { 
            if (graph[dequeue][i] === 1 && visited2[i] === false) { 
                visited2[i] = true; Queue.push(i); BFS_graph.push(i); 
            } 
        } 
    } 
    return; 
} 
const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, }); 
let input = []; 
let graph = []; 
let visited = []; 
let visited2 = []; 
let DFS_graph = []; 
let BFS_graph = []; 
rl.on("line", function (line) { 
    input.push(line); 
})
.on("close", function () { 
    let [n, m, v] = input[0].split(" ").map((el) => parseInt(el)); 
    input = input.slice(1); 
    graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); 
    
    for (let i of input) { 
        let [x, y] = i.split(" ").map((el) => parseInt(el)); 
        graph[x][y] = 1; 
        graph[y][x] = 1; 
    } 
    visited = new Array(n + 1).fill(false); 
    visited2 = new Array(n + 1).fill(false); 
    DFS(v); 
    BFS(v); 
    console.log(DFS_graph.join(" ")); 
    console.log(BFS_graph.join(" ")); 
    process.exit(); 
});
