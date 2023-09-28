function areBracketsBalanced(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i]);
            continue;
        }
        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0) return false;
        let check;
        switch (s[i]) {
            case "]":
                check = stack.pop();
                if (check === "(" || check === "{") {
                    return false;
                }
                break;
            case ")":
                check = stack.pop();
                if (check === "[" || check === "{") {
                    return false;
                }
                break;
            case "}":
                check = stack.pop();
                if (check === "[" || check === "(") {
                    return false;
                }
                break;
        }
    }
    return stack.length === 0;
}
// Input: exp = “([()])”
// Output: Balanced
// Explanation: all the brackets are well - formed

// Input: exp = “[(])”
// Output: Not Balanced
// Explanation: 1 and 4 brackets are not balanced because
// there is a closing ‘]’ before the closing ‘(‘
let expr = "([()])";
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");
