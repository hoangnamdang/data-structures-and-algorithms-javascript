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
let q = new Queue();
// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
// console.log(q.toString());
// q.dequeue();
// console.log(q.toString());
// console.log("Front of queue: " + q.front());
// console.log("Back of queue: " + q.back());
function Dancer(gender, name) {
    this.gender = gender;
    this.name = name;
}


function getDancers() {
    let listDancer = [
        "F Allison McMillan",
        "M Frank Opitz",
        "M Mason McMillan",
        "M Clayton Ruff",
        "F Cheryl Ferenback",
        "M Raymond Williams",
        "F Jennifer Ingram",
        "M Bryan Frazer",
        "M David Durr",
        "M Danny Martin",
        "F Aurora Adney",
    ];
    for (let i = 0; i < listDancer.length; i++) {
        let dancer = listDancer[i].split(" ");
        let gender = dancer[0];
        let name = dancer[1];
        if (gender === "F") {
            femaleDancers.enqueue(new Dancer(gender, name))
        }
        if (gender === "M") {
            maleDanders.enqueue(new Dancer(gender, name));
        }
    }
}

function showDander(female, male) {
    while (!female.empty() && !male.empty()) {
        console.log("female dander is : ", female.dequeue())
        console.log("male dander is : ", male.dequeue())
    }
}
let femaleDancers = new Queue();
let maleDanders = new Queue();
getDancers(femaleDancers, maleDanders)

showDander(femaleDancers, maleDanders)

if (!femaleDancers.empty()) {
    console.log("femaleDancers is waiting to dance :", femaleDancers.dataStore);
}

if (!maleDanders.empty()) {
    console.log("maleDanders is waiting to dance :", maleDanders.dataStore);
}
