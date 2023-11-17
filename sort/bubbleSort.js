// let array = [3, 2, 1, 6];
//loop j = 0: [2,3,1,6] => j = 1 => [2, 1, 3, 6] => j = 2 =>  end loop
// loop j = 0: 
function bubbleSort(arr) {
    // loop outer làm số lần lặp lại
    for (let i = 0; i < arr.length; i++) {
        // loop inner 
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
let array = [6, 3, 0, 5];
bubbleSort(array);
console.log(array);
