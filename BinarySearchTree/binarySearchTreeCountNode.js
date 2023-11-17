function Node1(node, left, right) {
    this.data = node;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.getMin = getMin;
    this.getMax = getMax;
    this.remove = remove;
    this.find = find;
}

function insert(data) {
    let newNode = new Node1(data, null, null);
    if (this.root === null) {
        this.root = newNode
    } else {
        let currentNode = this.root;
        while (true) {
            let parent = currentNode;
            if (currentNode.data === data) {
                currentNode.count++
                break;
            };
            if (data < currentNode.data) {
                currentNode = currentNode.left;
                if (currentNode === null) {
                    parent.left = newNode;
                    break;
                }
            }
            else {
                currentNode = currentNode.right;
                if (currentNode === null) {
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}

function getMin() {
    let current = this.root; // 56
    while (current !== null && current.left !== null) { // => 22 !== null true => loop => 10 !== null true => loop
        current = current.left; // => 22 => 10 => null
    }
    return current.data;
}

function getMax() {
    let current = this.root;
    while (current !== null && current.right !== null) {
        current = current.right;
    }
    return current.data;
}

function remove(node) {
    // case 1 root = null
    this.root = removeNode(this.root, node);
}

function removeNode(node, data) {
    if (node === null) {
        return null;
    }
    if (data === node.data) {
        //no child node
        if (node.left === null && node.right === null) {
            return null;
        }
        // no child left
        if (node.left === null) {
            node = node.right;
        }
        // no child right
        if (node.right === null) {
            node = node.left
        }
        // has two child
        let tempNode = getMinRight(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else {
        if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
}

function getMinRight(node) {
    let current = node;
    while (current !== null && current.left !== null) {
        current = current.left;
    }
    return current;
}

function find(data) {
    let current = this.root;
    if (current === null) return false;
    while (true) {
        if (current === null) {
            return false;
        }
        if (data === current.data) {
            return true;
        }
        if (data < current.data) {
            current = current.left;
            if (current === null) {
                return false;
            }
        } else {
            current = current.right;
            if (current === null) {
                return false;
            }
        }
    }
}


let nums = new BST();
nums.insert(56);
nums.insert(22);
nums.insert(10);
nums.insert(77);
nums.insert(77);
nums.insert(30);
nums.insert(81);
nums.insert(81);
nums.insert(77);
nums.insert(77);
nums.insert(92);
console.log(nums.getMin());
console.log(nums.getMax());
// console.log(nums.remove(56));
console.log(nums.find(92));
console.log(nums.root);
