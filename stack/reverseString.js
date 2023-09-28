let s = "hello";
console.log(printWords(s));

function printWords(str) {
    let listStr = str.split(" ");
    let output = "";
    for (let i = listStr.length - 1; i >= 0; i--) {
        output += listStr[i].split('').reverse().join("") + " ";
    }
    return output;
}
