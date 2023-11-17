function sequentialSearch(arr, data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data) {
            return true;
        }
    }
    return false;
}

function sequentialSearch1(arr, data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data) {
            return i;
        }
    }
    return -1;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function sequentialSelfOrganizingSearch(arr, data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            return true
        }
    }
    return false;
}

// sequentialSelfOrganizingSearch 80-20 rule
function sequentialSelfOrganizingSearch8020(arr, data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data && i > (arr.length * 0.2)) {
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
            return true;
        } else if (arr[i] === data) {
            return true;
        }
    }
    return false;
}

let nums = [
    93, 39, 31, 100, 49,
    46, 52, 20, 9, 22
];
// for (let i = 0; i < 100; i++) {
//     nums[i] = Math.floor(Math.random() * 100) + 1;
// }
console.log(nums);
// console.log(sequentialSearch(nums, 20));
// console.log(findMax(nums));
// console.log(findMin(nums));
console.log(sequentialSelfOrganizingSearch(nums, 20));
console.log(nums);
