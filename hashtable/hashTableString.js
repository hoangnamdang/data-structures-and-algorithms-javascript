function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}

function simpleHash(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        total += str.charCodeAt(i);
    }
    return total % this.table.length;
}

// function put(str) {
//     let position = this.simpleHash(str);
//     this.table[position] = str;
// }

function put(str) {
    let position = this.betterHash(str);
    this.table[position] = str;
}

function showDistro() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined)
            console.log(i + " : " + this.table[i]);
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
let listName = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (let i = 0; i < listName.length; i++) {
    hTable.put(listName[i])
}

// console.log(hTable.table);
hTable.showDistro()
