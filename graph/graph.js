function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.edges = 0;
    this.vertices = v;
    this.adjacencyList = [];
    for (let i = 0; i < this.vertices; i++) {
        this.adjacencyList[i] = [];
    }
    this.addGraph = addGraph;
    this.showGraph = showGraph;
    this.DFS = DFS;
    this.DFSUtil = DFSUtil;
    this.BFS = BFS;
}

function addGraph(vertex, edge) {
    this.adjacencyList[vertex].push(edge);
    this.adjacencyList[edge].push(vertex);
    this.edges++;
}

function showGraph() {
    for (let row = 0; row < this.adjacencyList.length; row++) {
        for (let column = 0; column < this.adjacencyList[row].length; column++) {
            console.log(row + " -> " + this.adjacencyList[row][column])
        }
    }
}

function DFS(vertex) {
    let visitedArr = [];
    for (let i = 0; i < this.vertices; i++) {
        visitedArr[i] = false;
    }
    this.DFSUtil(vertex, visitedArr);
}
//[ [ 1, 2 ], [ 0, 3 ], [ 0, 4 ], [ 1 ], [ 2 ] ]
// [ false, false, false, false, false]
//vertex = 0 => visitedArr[0] = true => [ true, false, false, false, false] => console.log("v", 0); => for(let val of this.adjacencyList[0]) val = 1 => !visitedArr[1] = true => DFSUtil(1, visitedArr)
//vertex = 1 => visitedArr[1] = true => [ true, true, false, false, false] => console.log("v", 1); => for(let val of this.adjacencyList[1]) val = 0 => !visitedArr[0] = false => break and loop continue for(let val of this.adjacencyList[1]) val = 3
// !visitedArr[3] => this.DFSUtil(3, visitedArr) => visitedArr[3] = true => [ true, true, false, true, false] => console.log("v", 3) => for(let val of this.adjacencyList[3]) val = 1 => !visitedArr[1] = false => break and loop continue => this.adjacencyList[3] has one [1] is had run => end for and end recursion vertex = 0 and val = 0. continue for (let val of this.adjacencyList[0]) val = 2
//vertex = 2 => !visitedArr[2] = true => this.DFSUtil(2, visitedArr) => visitedArr[vertex] = true; => [ true, true, true, true, false] => console.log("v", 2); => for(let val of this.adjacencyList[2]) val = 0 => !visitedArr[0] => false => break and loop continue for(let val of this.adjacencyList[2]) val = 4
// !visitedArr[4] => this.DFSUtil(4, visitedArr) => visitedArr[4] = true => [ true, true, true, true, true] =>  console.log("v", 4) => for(let val of this.adjacencyList[4]) val = 2 => !visitedArr[2] = false => break and loop continue =>  this.adjacencyList[4] has one [2] is had run => end function
function DFSUtil(vertex, visitedArr) {
    visitedArr[vertex] = true;
    console.log("DFS", vertex);
    for (let val of this.adjacencyList[vertex]) {
        if (!visitedArr[val]) {
            this.DFSUtil(val, visitedArr);
        }
    }
}

function BFS(vertex) {
    let visitedArr = [];
    for (let i = 0; i < this.vertices; i++) {
        visitedArr[i] = false;
    }

    let queue = [];
    queue.push(vertex);
    visitedArr[vertex] = true;
    while (queue.length > 0) {
        let itemQueue = queue.shift();
        console.log('BFS', itemQueue)
        for (let val of this.adjacencyList[itemQueue]) {
            if (!visitedArr[val]) {
                queue.push(val);
                visitedArr[val] = true;
            }
        }
    }
}
let g = new Graph(5);
g.addGraph(0, 1)
g.addGraph(0, 2)
g.addGraph(1, 3)
g.addGraph(2, 4)
g.showGraph();
console.log(g.adjacencyList);
g.DFS(0)
g.BFS(0)
