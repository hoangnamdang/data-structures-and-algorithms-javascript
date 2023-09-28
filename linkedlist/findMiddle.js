function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.findMiddle = findMiddle;
    this.display = display;
}

function find() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(item, el) {
    let currentNode = this.find(item);
    let newNode = new Node(el);
    newNode.next = currentNode.next;
    currentNode.next = newNode
}

function findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function remove(el) {
    let preNode = this.findPrevious(el);
    if (preNode.next !== null) {
        preNode.next = preNode.next.next
    }
}


function findPrevious(el) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== el) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function display() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
        console.log(currentNode.next.element)
        currentNode = currentNode.next;
    }
}

let linkedList = new LinkedList();
linkedList.insert("head", "milk");
linkedList.insert("milk", "break");
linkedList.insert("break", "eggs");
linkedList.insert("eggs", "cookies");
linkedList.insert("cookies", "bacon");
linkedList.display()
console.log("-------------");
console.log(linkedList.findMiddle());
