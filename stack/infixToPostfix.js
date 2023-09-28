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
function infixToPostfix(s) {
    let stack = [];
    let output = "";
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        // check Character a->z || A->Z || 0 -> 9
        if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")) {
            output += c;
            // check character (
        } else if (c === '(') {
            stack.push(c);
            // check character (
        } else if (c === ')') {
            while (stack[stack.length - 1] !== "(") {
                output += stack.pop();
            }
            stack.pop();
            //check expression + - * / ^
        } else {
            while (stack.length !== 0 && getOrderOperator(c) <= getOrderOperator(stack[stack.length - 1])) {
                output += stack[stack.length - 1];
                stack.pop();
            }
            stack.push(c);
        }
    }
    while (stack.length !== 0) {
        output += stack[stack.length - 1];
        stack.pop();
    }
    console.log(stack);
    console.log(output);
}

let exp = "a+b*(c^d-e)^(f+g*h)-i";
// abcd^e-fgh*+^*+i-
infixToPostfix(exp);

// This code is contributed by decode2207.
