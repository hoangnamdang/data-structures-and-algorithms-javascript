function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
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

function distribute(arr, queues, n, digit) {
    for (let i = 0; i < n; i++) {
        if (digit === 1) {
            queues[arr[i] % 10].enqueue(arr[i])
        } else {
            queues[Math.floor(arr[i] / 10)].enqueue(arr[i])
        }
    }
}

function collection(arr, queues, n) {
    let idx = 0;
    for (let i = 0; i < n; i++) {
        while (!queues[i].empty()) {
            arr[idx++] = queues[i].dequeue();
        }
    }
}

let queues = [];

// create list queue;
for (let i = 0; i < 10; i++) {
    queues[i] = new Queue();
}

let nums = [22, 70, 55, 75, 67, 38, 69, 54, 60, 48]; //=> [22, 38, 48, 54, 55, 60, 67, 69, 70, 75]

distribute(nums, queues, 10, 1);
collection(nums, queues, 10)
distribute(nums, queues, 10, 10);
collection(nums, queues, 10)
console.log(nums);
