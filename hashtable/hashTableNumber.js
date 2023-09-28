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
    let position = this.simpleHash(str);
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for (var j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}
let numStudents = 10;
let arrSize = 97;
let idLength = 9;

let students = new Array(numStudents)
genStuData(students);
for (let i = 0; i < students.length; i++) {
    console.log(students[i].substring(0, 8) + " : " + students[i].substring(9))
}

let hTable = new HashTable()
for (let i = 0; i < students.length; i++) {
    hTable.put(students[i]);
}
hTable.showDistro()
