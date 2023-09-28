function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.buildChain = buildChain;
    this.remove = remove;
}

function simpleHash(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        total += str.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(key, data) {
    let position = this.betterHash(key);
    let idx = 0;
    if (this.table[position][idx] === undefined) {
        this.table[position][idx] = data;
        ++idx;
    } else {
        while (this.table[position][idx] !== undefined) {
            ++idx;
        }
        this.table[position][idx] = data;
    }

}

function get(key) {
    let hashKey = this.betterHash(key);
    if (this.table[hashKey]) {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[hashKey][i] === key) {
                return this.table[hashKey];
            }
        }
    }
    return undefined;
}

function remove() {

}

function showDistro() {
    let n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

// better hash function utilizing Horner’s method
function betterHash(str) {
    const H = 47;
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        total += H * total + str.charCodeAt(i);
    }
    total = total % this.table.length;
    return parseInt(total);
}

function buildChain() {
    for (let i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
    }
}



let hTable = new HashTable();
hTable.buildChain();
console.log(hTable.table);
let someNames = ["David", "Jennifer", "Jonathan", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
for (let i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i], someNames[i]);
}
console.log(hTable.table);
hTable.showDistro()
console.log("ttt", hTable.get(someNames[9]))
