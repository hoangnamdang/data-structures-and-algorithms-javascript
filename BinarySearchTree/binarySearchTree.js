function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
}

// function insert(data) {
//     let node = new Node(data, null, null);
//     if (this.root === null) {
//         this.root = node;
//     } else {
//         let currentNode = this.root;
//         let parent;
//         while (true) {
//             parent = currentNode;
//             if (data < currentNode.data) {
//                 currentNode = currentNode.left;
//                 if (currentNode === null) {
//                     parent.left = node;
//                     break;
//                 }
//             } else {
//                 currentNode = currentNode.right;
//                 if (currentNode === null) {
//                     parent.right = node;
//                     break;
//                 }
//             }
//         }
//     }
// }

function insert(data) {
    let node = new Node(data, null, null);
    if (this.root === null) {
        this.root = node;
    } else {
        let current = this.root
        while (!(current === null)) {
            let parent = current
            if (data < current.data) {
                current = current.left
                if (current === null) {
                    parent.left = node
                }
            } else {
                current = current.right
                if (current === null) {
                    parent.right = node
                }
            }
        }
    }
}


/// flow stack inOrder
//inOrder(77) 
//inOrder(81) 
//inOrder(node.left-30 => null) break
//inOrder(30) => console.log(30) => inOrder(node.right-30 => null) break
//inOrder(node.left-10 => null); break
//inOrder(node.left-22 => 10); => console.log(10) => inOrder(node.right-10 => null) break
// inOrder(node.left-56 => 22); => console.log(22) => inOrder(node.right-22 => 30) => add to stack => break inOrder(30) end
//inOrder(56) => console.log(56) => inOrder(node.right-56 => 81) 

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

//flow stack preOrder
// right
//preOrder(92) => console.log(92) => preOrder(node.left-92 = null) preOrder(node.right-92 = null) end
//preOrder(77) => console.log(77) => preOrder(node.left-77 = null) preOrder(node.right-77 = null) end
//preOrder(node.right-56 = 81) => console.log(81) => preOrder(node.left-81 = 77) => preOrder(node.right-81 = 92) 
// left 56:
//preOrder(30) => console.log(30) => preOrder(node.left-130 = null) => preOrder(node.right-30 = null) end;
//preOrder(10) =>  preOrder(node.right-10 = null) => end;
//preOrder(22) => console.log(22) => preOrder(node.left-22 = 10) => preOrder(node.right-22 = 30);
//preOrder(56) => console.log(56) => preOrder(node.left-56 = 22) =>  end left  => preOrder(node.right-56 = 81);

function preOrder(node) {
    if (node !== null) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right)
    }
}


//flow stack postOrder
// right 56
//postOrder(92) => postOrder(node.left-92 = null) => postOrder(node.right-92 = null) => console.log(92) =>end
//postOrder(77) => postOrder(node.left-77 = null) => postOrder(node.right-77 = null) => consol.log(77) => end
//postOrder(81) => postOrder(node.left-81 = 77) => end 77 => postOrder(node.right-81 = 92) => end 92 => console.log(81) =>end
//left 56
//postOrder(30) => postOrder(node.left-30 = null) => postOrder(node.right-30 = null) => console.log(30); end
//postOrder(10) => postOrder(node.left-10 = null) => postOrder(node.right-10 = null) => console.log(10); end
//postOrder(22) => postOrder(node.left22 = 10) => end 10 => postOrder(node.right-22 = 30) => end 30 => console.log(22) => end 
//postOrder(56) => postOrder(node.left-56 = 22) => end 22 => postOrder(node.right-56 = 81) => end 81 => console.log(56) => end func postOrder

function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + ' ');
    }
}

function getMin() {
    let current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    let current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data
}

function find(data) {
    let current = this.root;
    while (data !== current.data) {
        if (data < current.data) {
            current = current.left
        } else {
            current = current.right;
        }
        if (current === null) {
            return null;
        }
    }
    return current
}
function remove(node) {
    this.root = removeNode(this.root, node)
}

function removeNode(node, data) {
    if (node === null) {
        return null;
    }
    //case 1/ node no children
    if (node.data === data) {
        if (node.right === null && node.left === null) {
            return null;
        }

        //node has no left child
        if (node.left === null) {
            node = node.right;
        }

        // node no has right child
        if (node.right === null) {
            node = node.left;
        }

        // node has two children
        let tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
        // tempNode.data = 42
    } else if (data < node.data) {// 
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return
    }
}

function getSmallest(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode;
}


let nums = new BST();
nums.insert(56);
nums.insert(22);
nums.insert(10);
nums.insert(30);
nums.insert(81);
nums.insert(77);
nums.insert(92);
console.log("Inorder traversal: ");
// console.log(nums.root)
console.log(nums.remove(56))
console.log(nums.root)
// inOrder(nums.root);
// console.log(nums.getMin());
// console.log(nums.getMax())

// console.log(nums.root)
