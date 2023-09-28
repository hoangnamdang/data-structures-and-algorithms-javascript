function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.pop = pop;
    this.push = push;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
    this.loopStack = loopStack;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1]
}

function length() {
    return this.top;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}

function loopStack() {
    for (let i = 0; i < this.top; i++) {
        console.log(this.dataStore[i])
    }
}

// let stack = new Stack();
// stack.push("a");
// stack.push('b');
// stack.push('c');
// stack.push('d');
// console.log(stack.peek());

// stack.loopStack()

// function mulBase(n, base) {
//     let s = new Stack();
//     do {
//         s.push(n % base);
//         n = Math.floor(n / base);
//     } while (n > 0)
//     let converted = "";
//     while (s.length() > 0) {
//         converted += s.pop();
//     }
//     return converted;
// }

// console.log(mulBase(200, 2));


// function isPalindrome(word) {
//     let s = new Stack();
//     for (let i = 0; i < word.length; i++) {
//         s.push(word[i]);
//     }
//     let strPop = "";
//     while (s.length() > 0) {
//         strPop += s.pop();
//     }
//     if (word === strPop) {
//         return true;
//     }

//     return false;
// }

// console.log(isPalindrome("dad"));
// console.log(isPalindrome("racecar"));


function recursion(n) {
    if (n === 0) {
        return 1;
    }
    return n * recursion(n - 1);
}
// 5 * recursion(5 - 1 => 4)
// 4 * recursion(4 - 1 => 3)
// 3 * recursion(3 - 1 => 2)
// 2 * recursion(2 - 1 => 1)
// 1 * recursion(1 - 1 => 0)

// console.log(recursion(5))

function recursionStack(n) {
    let s = new Stack();
    while (n > 0) {
        s.push(n--);
    }
    let total = 1
    while (s.length() > 0) {
        total *= s.pop();
    }
    return total;
}

console.log(recursionStack(5))

// const exp = "2.3+23/12+(3.14159*.24"

// function checkParenthesisMissing(expression) {
//     let listExp = expression.split("");
//     let s = new Stack();
//     let hasParenthesis = false;
//     for (let i = 0; i < listExp.length; i++) {
//         if (s.dataStore[i][0] === "{") {
//             hasParenthesis = true;
//         }

//     }

// }
// checkParenthesisMissing(exp)
function balancePar(expr) {

}

console.log(
    balancePar('(1+2*3*(4*5+3)')
)
