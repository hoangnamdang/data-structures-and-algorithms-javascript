function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}


function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
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

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}


function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    // if (this.pos > 0) {
    //     --this.pos;
    // }
    this.pos < 0 ? this.pos = 0 : this.pos -= 1
}
function next() {
    // if (this.pos < this.listSize - 1) {
    //     ++this.pos;
    // }
    this.pos > this.dataStore.length ? this.pos = this.end() : this.pos += 1
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}

const list = new List();
// list.append('Cynthia')
// list.append('Raymond')
// list.append('Barbara')
// list.append('Test')
// console.log(list.toString())
// console.log(list.remove("Raymond"));
// console.log(list.toString());
// list.append("Clayton");
// list.append("Raymond");
// list.append("Cynthia");
// list.append("Jennifer");
// list.append("Bryan");
// list.append("Danny");
// list.front();
// console.log(list.getElement())

// list.next();
// console.log(list.getElement())

// list.next();
// list.next();
// list.prev();
// console.log(list.getElement())

// console.log(list.front())
// console.log(list.pos)
// console.log(list.currPos())
// console.log(list.pos)
// console.log(list.currPos())
// console.log(list.pos)
// console.log(list.next())
// console.log(list.pos)
// for (list.front(); list.currPos() < list.length(); list.next()) {
//     console.log(list.getElement())
// }

// for (list.end(); list.currPos >= 0; list.prev()) {
//     console.log(list.getElement())
// }
let movies = [
    "1. The Shawshank Redemption",
    "2. The Godfather",
    "3. The Godfather: Part II",
    "4. Pulp Fiction",
    "5. The Good, the Bad and the Ugly",
    "6. 12 Angry Men",
    "7. Schindler’s List",
    "8. The Dark Knight",
    "9. The Lord of the Rings: The Return of the King",
    "10. Fight Club",
    "11. Star Wars: Episode V - The Empire Strikes Back",
    "12. One Flew Over the Cuckoo’s Nest",
    "13. The Lord of the Rings: The Fellowship of the Ring",
    "14. Inception",
    "15. Goodfellas",
    "16. Star Wars",
    "17. Seven Samurai",
    "18. The Matrix",
    "19. Forrest Gump",
    "20. City of God"
];

let names = new List();

for (let i = 0; i < movies.length; i++) {
    names.append(movies[i])
}

for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}

// for (names.end(); names.currPos() >= 0; names.prev()) {
//     console.log(names.getElement());
// }
