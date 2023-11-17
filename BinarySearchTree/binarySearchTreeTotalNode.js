function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.count = 1;
    this.show = show;
}
function BinarySearchTree() {
    this.root = null;
    this.insert = insert;
    this.remove = remove;
    this.find = find;
    this.getMin = getMin;
    this.getMax = getMax;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.countEdges = countEdges;
}

function show() {
    return this.data;
}
function insert(data) {
    let newNode = new Node(data, null, null);
    if (this.root === null) {
        this.root = newNode;
    } else {
        let current = this.root;
        while (current !== null) {
            let parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === current.data) {
                    current.count++;
                }
                if (current === null) {
                    parent.left = newNode;
                    break;
                }
            } else {
                current = current.right;
                if (current === current.data) {
                    current.count++;
                }
                if (current === null) {
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}

function remove(element) {
    this.root = removeNode(this.root, element)
    return this.root;
}

function removeNode(node, data) {
    if (node === null) return node;
    if (data === node.data) {
        if (node.left === null && node.right === null) {
            return null;
        }

        if (node.left === null) {
            node = node.right
        }
        if (node.right === null) {
            node = node.left;
        }

        let tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data)
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

function getSmallest(node) {
    let current = node;
    while (current !== null && current.left !== null) {
        current = current.left;
    }
    return current;
}

function find(element) {
    let current = this.root;
    if (current === null) return false;
    while (current !== null && current.data !== element) {
        if (element < current.data) {
            current = current.left;
            if (current !== null && current.data === element) return current;
        } else {
            current = current.right;
            if (current !== null && current.data === element) return current;
        }
    }
    return false;
}

function getMin() {
    let current = this.root;
    while (current !== null && current.left !== null) {
        current = current.left;
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

//stack
//
//
//
//
//
function inOrder(node) {
    let current = node;
    // in theo thứ tự từ nhỏ tới lớn;
    if (current !== null) {
        inOrder(current.left);
        console.log(current.show() + " ");
        inOrder(current.right)
    }
}
function preOrder(node) {
    let current = node;
    if (current !== null) {
        console.log(current.show() + " ")
        preOrder(current.left);
        preOrder(current.right);
    }
}
function postOrder(node) {
    let current = node;
    while (current !== null) {
        postOrder(current.left);
        postOrder(current.right);
        console.log(current.show() + " ")
    }
}
/// stack
//
//
//totalNodes(root.left-5 = null) => 0
//totalNodes(root.right-5 = null) => 0
//totalNodes(root.left-15 = null) => 0
//totalNodes(root.right-15 = null) => 0
//totalNodes(5) => 1 + totalNodes(root.left-5 = null) + totalNodes(root.right-5 = null) => 1 + 0 + 0 => 1
//totalNodes(15) => 1+ totalNodes(root.left-15 = null) + totalNodes(root.right-15 = null) => 1 + 0 + 0 => 1
//totalNodes(10) => 1 + totalNodes(5) + totalNodes(15) =>  1+1+1 => 3

//
//totalNodes(root.right-60 = null) = 0
//totalNodes(root.left-60 = null) = 0
//totalNodes(root.right-80 = null) = 0
//totalNodes(root.left-80 = null) = 0
//totalNodes(80) => 1 + totalNodes(root.left-80 = null) + totalNodes(root.right-80 = null) => 1 + 0 + 0
//totalNodes(60) => 1 + totalNodes(root.left-60 = null) + totalNodes(root.right-60 = null) => 1 + 0 + 0
//totalNodes(70) => 1 + totalNodes(60) + totalNodes(80) =>  1+1+1 => 3

//totalNodes(root) => 1 +  totalNodes(10) + totalNodes(70) => 1 + 3 + 3
function totalNodes(root) {
    if (root === null) {
        return 0;
    }
    let l = totalNodes(root.left);
    let r = totalNodes(root.right);

    return 1 + l + r;
}


function countEdges(root) {
    let totalNode = totalNodes(root);
    return totalNode - 1;
}


let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(15);
bst.insert(70);
bst.insert(70);
bst.insert(60);
bst.insert(60);
bst.insert(80);
// console.log(bst.find('10'));
// console.log(bst.getMin());
// console.log(bst.getMax());
// bst.preOrder(bst.root);
// console.log(bst.remove(50));

console.log(totalNodes(bst.root));
