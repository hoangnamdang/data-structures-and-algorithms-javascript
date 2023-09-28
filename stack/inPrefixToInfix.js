/* Javascript implementation to convert
 infix expression to postfix*/

//Function to return precedence of operators
function getOrderOperator(operator) {
    switch (operator) {
        case "^":
            return 3;
        case "*":
        case "/":
            return 2;
        case "+":
        case "-":
            return 1;
        default:
            return -1;
    }
}

// The main function to convert infix expression
//to postfix expression
function inPrefixToInfix(s) {
    let stack = [];
    let n = s.length;
    for (let i = n - 1; i >= 0; i--) {
        const c = s[i];
        if (getOrderOperator(c) > -1) {
            let character1 = stack[stack.length - 1];
            stack.pop();
            let character2 = stack[stack.length - 1];
            stack.pop();
            let temp = "( " + character1 + " " + c + " " + character2 + " )";
            stack.push(temp)
        } else {
            if (c !== " ") {
                stack.push(c + "");
            }
        }
    }
    return stack[stack.length - 1];
}
// Input: Prefix:  * +AB - CD
// Output: Infix: ((A + B) * (C - D))
let exp = "* +AB - CD";
// abcd^e-fgh*+^*+i-
console.log(inPrefixToInfix(exp));

// This code is contributed by decode2207.
