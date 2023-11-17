function shellSort(arr) {
    let n = arr.length;

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Do a gapped insertion sort for this gap size.
        for (let i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j = j - gap) {
                arr[j] = arr[j - gap];
            }

            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }

    }
    return arr;
};
// let tt = [7, 6, 8, 9, 3, 2, 10, 5, 1];
// shellSort(tt);
// console.log(tt);
// arr = [7, 6, 8, 9, 3, 2, 10, 5, 1];
// gap = Math.floor(arr.length/2) = 4
// for(let i = gap): loop các phần tử
// let temp = arr[i] = 3
// let j: tạo 1 index để hoán vị
//  for (j = i; j >= gap && arr[j - gap] > temp; j = j - gap) { => j = 4; j >= gap : 4 >= 4 && arr[4 - 4 : 0] = 7 > 3
//    arr[j] = arr[j - gap]; // hoán chỗ arr[4] = arr[4 - 4: 0]
//}
// arr[j] = temp; // arr[4] = 3
