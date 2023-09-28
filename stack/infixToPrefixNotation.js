/* Javascript implementation to convert
 infix expression to postfix*/

//Function to return precedence of operators
function getOrderOperator(operator) {
    switch (operator) {
        case "^":
            return 3;
        case "*":
        case "/":
            return 2
        case "+":
        case "-":
            return 1;
        default:
            return -1;
    }
}

// The main function to convert infix expression
//to postfix expression
function infixToPrefix(s) {
    let stack = [];
    let n = s.length;
    let output = "";
    for (let i = n - 1; i >= 0; i--) {
        const c = s[i];
        if (getOrderOperator(c) > -1) {
            while (stack.length !== 0 && getOrderOperator(c) <= getOrderOperator(stack[stack.length - 1])) {
                output += stack[stack.length - 1];
                stack.pop();
            }
            stack.push(c);
        } else {
            if (s !== " ") {
                output += c;
            }
        }
    }
    while (stack.length > 0) {
        output += stack[stack.length - 1];
        stack.pop();
    }
    return output.split("").reverse().join("")
}
// Input: A * B + C / D
// Output: + * A B / C D
let exp = "A * B + C / D";

console.log(infixToPrefix(exp));

// This code is contributed by decode2207.
