function quickSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    let lesser = [];
    let greater = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            greater.push(arr[i]);
        } else {
            lesser.push(arr[i])
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater))
}

//lesser [23, 43, 12, 33] , greater = [75,55,64,77] => pivot = 44 => quickSort([12,23,33,43]).concat(44, quickSort(greater = [55, 64, 75, 77]))
// lesser
//quickSort(lesser [23, 43, 12, 33]) => pivot 23 => lesser = [12] \ greater = [43, 33] => quickSort([12]).concat(23, quickSort([33, 43]));
//quickSort(lesser [12]) => pivot 12 => let lesser = [] greater = [] => quickSort([]).concat(12, quickSort([]));
//quickSort(lesser []) return [];
//quickSort(greater []) return [];

//quickSort(greater [43, 33]) => pivot = 43 => lesser = [33] \ greater = [] => quickSort([33]).concat(43, quickSort([]));
//quickSort(lesser [33]) => pivot = 33 => lesser = [] greater = [] =>  quickSort([]).concat(33, quickSort([]));
//33: quickSort(lesser []) return [];
//33: quickSort(greater []) return [];
// quickSort(greater []) return [];
// 

//greater = [75,55,64,77] => pivot = 75 => lesser = [55, 64] \ greater = [77] => quickSort(55, 64).concat(75, quickSort([77]));
//quickSort(lesser [55, 64]) => pivot 55 => lesser = [] \ greater = [64] => quickSort([]).concat(55, quickSort([64]));
//quickSort(lesser []) return [];
//quickSort(greater [64]) => pivot 64 => let lesser = [] greater = [] => quickSort([]).concat(64, quickSort([]));
//quickSort(lesser []) return [];
//quickSort(greater []) return [];

// quickSort(greater [77]) => pivot 77 => let lesser = [] greater = [] => quickSort([]).concat(77, quickSort([]));
let arr = [44, 75, 23, 43, 55, 12, 64, 77, 33];
console.log("quicksort", quickSort(arr))
