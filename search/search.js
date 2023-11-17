function binarySearch(arr, data) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        console.log("mid", mid)
        if (arr[mid] < data) {
            min = mid + 1;
        } else if (arr[mid] > data) {
            max = mid - 1;
        } else {
            return mid;
        }
    }
}


function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === data) {
            return i;
        }
    }
    return -1;
}
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            --j;
        }
        arr[j] = temp;
    }
}
let str = "The nationalism of Hamilton was undemocratic. The democracy of Jefferson was, in the beginning, provincial. The historic mission of uniting nationalism and democracy was in the course of time given to new leaders from a region beyond the mountains."
let words = str.split(" ");
console.log(words);
insertionSort(words);
console.log(words);
var word = "Hamilton";
var start = new Date().getTime();
var position = binarySearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    console.log("Found " + word + " at position " + position + ".");
    console.log("Binary search took " + elapsed + " milliseconds.");
}
else {
    console.log(word + " is not in the file.");
}



