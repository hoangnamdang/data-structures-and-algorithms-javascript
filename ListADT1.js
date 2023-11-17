function List() {

    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.insertAfter = insertAfter;
    this.clear = clear;
    this.listSize = 0;

    this.length = length;
    this.find = find;
    this.print = print;
    this.toString = toString;

    this.pos = 0;
    this.currentPos = currentPos;
    this.prevPos = prevPos;
    this.nextPos = nextPos;
    this.movePos = movePos;
    this.firstPos = firstPos;
    this.lastPos = lastPos;
    this.getPos = getPos;

    this.loopBack = loopBack;
    this.loopFront = loopFront;
}

function add(item) {
    this.dataStore[this.listSize++] = item;
}

function toString() {
    return this.dataStore.toString();
}

function length() {
    return this.listSize;
}
function find(item) {
    for (let i = 0; i < this.listSize; i++) {
        if (this.dataStore[i] === item) {
            return i;
        }
    }
    return -1;
}

function remove(item) {
    let foundAt = this.find(item);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function insertAfter(key, item) {
    let foundAt = this.find(key);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt + 1, 0, item);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.pos = 0;
}

function firstPos() {
    this.pos = 0;
}
function lastPos() {
    this.pos = this.listSize - 1;
}

function getPos() {
    return this.dataStore[this.pos];
}
function currentPos() {
    return this.pos;
}

function nextPos() {
    if (this.pos > this.listSize) {
        this.pos = this.lastPos();
    } else {
        this.pos += 1;
    }
}

function prevPos() {
    if (this.pos < 0) {
        this.pos = 0;
    } else {
        this.pos -= 1;
    }
}

function print() {
    console.log(this.dataStore);
}

function movePos(position) {
    if (position < 0 || position > this.listSize - 1) {
        this.currentPos();
    } else {
        this.pos = position;
    }
}

function loopFront() {
    for (this.firstPos(); this.currentPos() < this.listSize; this.nextPos()) {
        console.log(this.getPos());
    }
}

function loopBack() {
    for (this.lastPos(); this.currentPos() >= 0; this.prevPos()) {
        console.log(this.getPos());
    }
}



let listName = new List();
listName.add("A");
listName.add("B");
listName.add("C");
listName.add("D");
listName.add("E");
// console.log(listName)
// console.log(listName.toString())
// listName.remove("B");
// console.log(listName)
listName.insertAfter("D", "P")
listName.movePos(3);
// console.log(listName.prevPos())
// console.log(listName.getPos())
// console.log(listName.nextPos())
// console.log(listName.getPos())
console.log(listName.loopFront())
