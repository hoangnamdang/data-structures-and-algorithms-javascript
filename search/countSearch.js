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
    return -1;
}
function countSearch(arr, data) {
    let count = 0;
    let position = binarySearch(arr, data);
    if (position > - 1) {
        count++;
        for (let i = position - 1; i >= 0; --i) {
            if (arr[i] === data) {
                ++count;
            } else {
                break;
            }
        }
        for (let i = position + 1; i < arr.length; i++) {
            if (arr[i] === data) {
                ++count;
            } else {
                break;
            }
        }

    }
    return count;
}
let t = ['1', '1', '1', '1', '5', '7', '7', '8', '8', '9', '10', '11', '11', '13', '13', '13', '14', '14', '14', '15', '15', '18', '18', '19', '19', '19', '19', '20', '20', '20', '21', '22', '22', '22', '23', '23', '24', '25', '26', '26', '29', '31', '31', '33', '37', '37', '37', '38', '38', '43', '44', '44', '45', '48', '48', '49', '51', '52', '53', '53', '58', '59', '60', '61', '61', '62', '63', '64', '65', '68', '69', '70', '72', '72', '74', '75', '77', '77', '79', '79', '79', '83', '83', '84', '84', '86', '86', '86', '91', '92', '93', '93', '93', '94', '95', '96', '96', '97', '98', '100'];
console.log(countSearch(t, '1'))
