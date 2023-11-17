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
g.BFS(0)
