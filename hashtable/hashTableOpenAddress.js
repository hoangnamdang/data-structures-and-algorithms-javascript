function HashTable() {
    this.table = new Array(137);
    this.values = [];
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
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
    if (this.table[position] === undefined) {
        this.table[position] = key;
        this.values[position] = data;
    }
    else {
        while (this.table[position] !== undefined) {
            position++;
        }
        this.table[position] = key;
        this.values[position] = data
    }
}

function get(key) {
    let hashKey = this.betterHash(key);
    if (hashKey > -1) {
        for (let i = hashKey; this.table[i] !== undefined; i++) {
            if (this.table[hashKey] === key) {
                return this.values[hashKey];
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
        if (this.table[i] != undefined) {
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



let hTable = new HashTable();
let someNames = ["David", "Jennifer", "Jonathan", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
for (let i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i], someNames[i]);
}
console.log(hTable.table);
console.log(hTable.values);
// hTable.showDistro()
console.log("ttt", hTable.get(someNames[9]))
