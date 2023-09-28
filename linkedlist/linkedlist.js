function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}


function find(el) {
    let currentNode = this.head;
    while (currentNode.element !== el) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement, item) {
    let newNode = new Node(newElement);
    let currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
}

function findPrevious(el) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== el) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function remove(el) {
    const preNode = this.findPrevious(el);
    if (preNode.next !== null) {
        preNode.next = preNode.next.next;
    }
}

function display() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
        // console.log(currentNode);
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
} function Node(element) {
    this.element = element;
    this.next = null;
}
function LinkedList() {
    this.head = new Node("head");
    this.insert = insert;
    this.insertByKey = insertByKey;
    this.find = find;
    this.remove = remove;
    this.show = show;
    this.findPrevious = findPrevious;
}

function insert(element) {
    let newNode = new Node(element);
    let currentNode = this.head;
    if (currentNode.next === null) {
        currentNode.next = newNode;
    } else {
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode
    }

}

function insertByKey(element, key) {
    let currentNode = this.head;
    let newNode = new Node(element);
    currentNode = this.find(key);
    newNode.next = currentNode.next;
    currentNode.next = newNode
}

function find(key) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
        if (currentNode.element === key) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return currentNode;
}

function findPrevious(element) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
        if (currentNode.next.element === element) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }
}
function remove(element) {
    let prevNode = this.findPrevious(element);
    if (prevNode.next === null) return prevNode;
    prevNode.next = prevNode.next.next;
}

function show() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}
let linkedList = new LinkedList();
linkedList.insert("A");
linkedList.insert("B");
linkedList.insert("C");
linkedList.insertByKey("D", "B")
linkedList.show()
linkedList.remove("D");
linkedList.show();


let list = new LinkedList();
var cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display()
cities.remove("Russellville")
cities.display()
