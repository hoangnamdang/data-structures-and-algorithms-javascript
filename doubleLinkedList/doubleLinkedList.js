function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}
function dispReverse() {
    let currentNode = this.findLast();
    while (currentNode.previous !== null) {
        console.log(currentNode.element);
        currentNode = currentNode.previous;
    }
}

function findLast() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
// findPrevious is no longer needed
/*function findPrevious(item) {
 var currNode = this.head;
 while (!(currNode.next == null) &&
 (currNode.next.element != item)) {
 currNode = currNode.next;
 }
 return currNode;
}*/
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Carlisle", "Conway");
cities.insert("Alma", "Carlisle");
cities.display();
console.log("---------------------");
console.log(cities.dispReverse())


//------------DoubleLinkedList-----------------//

// function Node(element) {
//     this.element = element;
//     this.next = null;
//     this.prev = null;
// }
// function DoubleLinkedList() {
//     this.head = new Node("head");
//     this.find = find;
//     this.insert = insert;
//     this.insertByKey = insertByKey;
//     this.remove = remove;
//     this.reverse = reverse;
//     this.display = display;
// }

// function find(element) {
//     let currentNode = this.head;
//     while (currentNode.element !== element) {
//         currentNode = currentNode.next;
//     }
//     return currentNode;
// }

// function insert(element) {
//     let currentNode = this.head;
//     let newNode = new Node(element);
//     newNode.next = currentNode.next;
//     newNode.prev = currentNode;
//     currentNode.next = newNode;

// }

// function insertByKey(element, key) {
//     let currentNode = this.find(key);
//     let newNode = new Node(element);
//     newNode.next = currentNode.next;
//     newNode.prev = currentNode;
//     currentNode.next = newNode;
// }

// function remove(el) {
//     let currentNode = this.find(el);
//     if (currentNode.next !== null) {
//         currentNode.prev.next = currentNode.next;
//         currentNode.next.prev = currentNode.prev;
//         currentNode.next = null;
//         currentNode.prev = null;
//     }
// }

// function reverse() {
//     let current = this.head;
//     let prev = null;
//     let next = null;
//     while (current.next !== null) {
//         next = head.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
// }

// function display() {
//     let currentNode = this.head;
//     while (currentNode.next !== null) {
//         console.log(currentNode.next.element);
//         currentNode = currentNode.next;
//     }
// }

// let ddLinkedList = new DoubleLinkedList();
// ddLinkedList.insertByKey("A", "head");
// ddLinkedList.insertByKey("B", "A");
// ddLinkedList.insertByKey("C", "B");
// ddLinkedList.insertByKey("D", "C");
// ddLinkedList.insertByKey("E", "D");
// ddLinkedList.insertByKey('R', 'E')
// ddLinkedList.display();
