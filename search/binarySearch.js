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
let t = [12, 22, 33, 45, 57, 68, 74, 80, 93, 100];
console.log(binarySearch(t, 68))

//[12, 22, 33, 45, 57, 68, 74, 80, 93, 100] , data = 68
//min = 0; max = 9
//while 0 <= 9
// mid = Math.floor(0 + 9) / 2 = 4
// case arr[4]: 57: < 68
// min = 4 + 1 = 5
//while 5 <= 9
// mid = Math.floor(5 + 9) / 2 = 7
// case arr[7]: 80 : > 68
// max = 7 - 1 = 6

//while 5 <= 6
// mid = Math.floor(5 + 6) / 2 = 5
// case arr[5]: 68 : = 68
// return 5;
