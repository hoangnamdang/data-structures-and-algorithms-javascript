function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
    this.PriorityQueue = PriorityQueue;
}

function enqueue(item) {
    this.dataStore.push(item);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    let str = "";
    for (let i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i];
    }
    return str;
}

function empty() {
    return this.dataStore.length === 0;
}

function count() {
    return this.dataStore.length
}


function PriorityQueue() {
    let priority = 0;
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code > priority) {
            priority = i
        }
    }
    this.dataStore.splice(priority, 1);
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

let patient1 = new Patient("A", 1);
let patient2 = new Patient("B", 1);
let patient3 = new Patient("C", 3);
let patient4 = new Patient("D", 2);

let queue = new Queue();
queue.enqueue(patient1)
queue.enqueue(patient2)
queue.enqueue(patient3)
queue.enqueue(patient4)
console.log(queue.dataStore);
queue.PriorityQueue();
console.log(queue.dataStore);
