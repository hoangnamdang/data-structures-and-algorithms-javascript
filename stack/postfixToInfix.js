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
function postfixToInfix(s) {
    let stack = [];
    let n = s.length;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (isOperator(c)) {
            let character1 = stack[stack.length - 1];
            stack.pop();
            let character2 = stack[stack.length - 1];
            stack.pop();
            let temp = "( " + character2 + c + character1 + " )";
            stack.push(temp);
        } else {
            stack.push(c);
        }
    }
    console.log(stack);
}
/**
Input : abc++
Output : (a + (b + c))

Input  : ab*c+
Output : ((a*b)+c)
 */
let exp = "abc++";
console.log(prefixToPostfix(exp));

// This code is contributed by decode2207.
