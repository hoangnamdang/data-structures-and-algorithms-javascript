let array = [3, 2, 1, 6];
//loop 0: [1, 2, 3, 6]  
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_idx] > arr[j]) {
                min_idx = j;
            }
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

selectionSort(array);
console.log(array);
