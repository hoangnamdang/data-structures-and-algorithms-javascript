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

function InfixToPostfix(s) {
    let stack = [];
    let output = "";
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c >= "0" && c <= "9") {
            output += c;
            continue;
        }
        if (isOperator(c)) {
            stack.push(c);
            continue;
        }
        if (c === "(") {
            stack.push(c);
            continue;
        }
        if (c === ")") {
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                output += stack[stack.length - 1];
                stack.pop();
            }
            stack.pop();
        }
    }
    while (stack.length > 0) {
        output += stack[stack.length - 1];
        stack.pop();
    }
    return output;
}

function applyOperator(op, a, b) {
    switch (op) {
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
function ReversePolishNotation(expr) {
    const stringExp = InfixToPostfix(expr);
    let stack = [];
    for (let i = 0; i < stringExp.length; i++) {
        if (stringExp[i] >= "0" && stringExp[i] <= "9") {
            stack.push(stringExp[i]);
        }
        if (isOperator(stringExp[i])) {
            let exp1 = Number(stack[stack.length - 1]);
            stack.pop();
            let exp2 = Number(stack[stack.length - 1]);
            stack.pop();
            let temp = applyOperator(stringExp[i], exp1, exp2);
            stack.push(temp);
        }
    }
    return stack[stack.length - 1];
}
// Infix notation: (2+4) * (4+6)
// Post-fix notation: 2 4 + 4 6 + *
// Result: 60
let expr = "(2+4) * (4+6)";
console.log(ReversePolishNotation(expr));
