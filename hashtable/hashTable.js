function HashTable() {
    this.table = new Array(137); // prime number
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showTable = showTable;
    this.get = get;
    this.put = put;
    this.separateChaining = separateChaining;
}


function simpleHash(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        total += str.charCodeAt(i);
    }
    return total % this.table.length;
}

function betterHash(str) {
    let H = 47;
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        total += (H * total) + str.charCodeAt(i);
    }
    return total % this.table.length;
}

function showTable() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            console.log(i + " : " + this.table[i]);
        }
    }
}

// function putSeparateChaining(value) {
//     let key = this.betterHash(value);
//     let index = 0;
//     if (this.table[key][index] === undefined) {
//         this.table[key][index] = value;
//         index++;
//     } else {
//         while (this.table[key][index] !== undefined) {
//             index++;
//         }
//         this.table[key][index] = value
//     }
// }

// function getSeparateChaining(value) {
//     let key = this.betterHash(value);
//     let index = 0;
//     if (this.table[key][index] === value) {
//         return this.table[key][index]
//     } else {
//         index++;
//         while (this.table[key][index] !== value) {
//             index++;
//         }
//         return this.table[key][index];
//     }
// }

function putOpenAddress(value) {
    let key = this.betterHash(value);
    if (this.table[key] !== undefined) {
        this.table[key] = value;
    } else {
        key++;
        while (this.table[key] !== undefined) {
            key++;
        }
        this.table[key] = value;
    }
}

function getOpenAddress(value) {
    let key = this.betterHash(value);
    for (let i = key; i < this.table.length; i++) {
        if (this.table[i] === value) {
            return this.table[i];
        }
    }
}

function separateChaining() {
    for (let i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
    }
}

let hashTable = new HashTable();
// hashTable.separateChaining();
let arrayName = ["David", "Jennifer", "Jennifer", "Donnie", "Jennifer", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (let value of arrayName) {
    hashTable.putOpenAddress(value);
}

hashTable.showTable();
console.log(hashTable.getOpenAddress("Jennifer"))
