function isOperator(oper) {
    switch (oper) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "^":
            return true;
        default:
            return false;
    }
}

function applyOperator(oper, a, b) {
    switch (oper) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "^":
            return a ^ b;
        default:
            return 0;
    }
}

function EvaluationOfPostfixExpression(s) {
    let stack = [];
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let c = s[i];
        if (isOperator(c)) {
            let exp1 = Number(stack[stack.length - 1]);
            stack.pop();
            let exp2 = Number(stack[stack.length - 1]);
            stack.pop();
            let temp = applyOperator(c, exp2, exp1);
            stack.push(temp);
        } else {
            if (c !== " ") {
                stack.push(c);
            }
        }
    }
    return stack[stack.length - 1]
}

// Input: str = “2 3 1 * + 9 -“
// Output: -4
// Explanation: If the expression is converted into an infix expression, it will be 2 + (3 * 1) – 9 = 5 – 9 = -4.
let expr = "2 3 1 * + 9 -";
console.log(EvaluationOfPostfixExpression(expr));
