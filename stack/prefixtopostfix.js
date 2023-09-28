/* Javascript implementation to convert
 infix expression to postfix*/

//Function to return precedence of operators
function isOperator(operator) {
    switch (operator) {
        case "^":
        case "*":
        case "/":
        case "+":
        case "-":
            return true;
        default:
            return false;
    }
}

// The main function to convert infix expression
//to postfix expression
function prefixToPostfix(s) {
    let stack = [];
    let n = s.length;
    for (let i = n - 1; i >= 0; i--) {
        let c = s[i];
        if (isOperator(c)) {
            let exp1 = stack[stack.length - 1];
            stack.pop();
            let exp2 = stack[stack.length - 1];
            stack.pop();
            let temp = exp1 + exp2 + c;
            stack.push(temp);
        } else {
            stack.push(c);
        }
    }
    console.log(stack);
}
/**
 * Input :  Prefix :  *+AB-CD
Output : Postfix : AB+CD-*
Explanation : Prefix to Infix :  (A+B) * (C-D)
Infix to Postfix :  AB+CD-*
 */
let exp = "*+AB-CD";
console.log(prefixToPostfix(exp));

// This code is contributed by decode2207.
